#!/usr/bin/env node

/**
 * Notion to Docusaurus Sync Script
 *
 * This script fetches content from the Mindflow Notion Help Center
 * and converts it to Markdown files compatible with Docusaurus.
 *
 * Required environment variables:
 *   NOTION_TOKEN        - Notion integration API token
 *   NOTION_ROOT_PAGE_ID - Root page ID of the Help Center
 *
 * Setup:
 *   1. Create a Notion integration at https://www.notion.so/my-integrations
 *   2. Share the Help Center page with the integration
 *   3. Add NOTION_TOKEN and NOTION_ROOT_PAGE_ID as GitHub secrets
 */

const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("@tryfabric/martian");
const fs = require("fs");
const path = require("path");

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const ROOT_PAGE_ID = process.env.NOTION_ROOT_PAGE_ID;

if (!NOTION_TOKEN || !ROOT_PAGE_ID) {
  console.error(
    "Missing required environment variables: NOTION_TOKEN, NOTION_ROOT_PAGE_ID"
  );
  console.error("See scripts/notion-sync.js header for setup instructions.");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });

// Mapping from Notion page titles to Docusaurus file paths
const PATH_MAP = {
  "Getting started": "docs/getting-started/index.md",
  Overview: "docs/getting-started/overview.md",
  "Sign In": "docs/getting-started/sign-in.md",
  Basics: "docs/getting-started/basics.md",
  Quickstart: "docs/getting-started/quickstart.md",
  "No-Code best practices": "docs/getting-started/no-code-best-practices.md",
  Guides: "docs/guides/index.md",
  Training: "docs/guides/training.md",
  "Building Flows": "docs/guides/building-flows/index.md",
  "Start a Flow from a Template":
    "docs/guides/building-flows/start-a-flow-from-a-template.md",
  "Trigger your flow": "docs/guides/building-flows/trigger-your-flow.md",
  "Reach out to services":
    "docs/guides/building-flows/reach-out-to-services.md",
  "Work with data": "docs/guides/building-flows/work-with-data.md",
  "Run a Nested Flow": "docs/guides/building-flows/run-a-nested-flow.md",
  "Report Executions by Email":
    "docs/guides/building-flows/report-executions-by-email.md",
  "Handy tools": "docs/guides/building-flows/handy-tools.md",
  "Use AI Agent": "docs/guides/building-flows/use-ai-agent.md",
  "Run a script": "docs/guides/building-flows/run-a-script.md",
  "AIBuild: Faster flow creation": "docs/guides/building-flows/aibuild.md",
  "AITask: Prompt guidelines": "docs/guides/building-flows/aitask.md",
  "AISwarms: Multi-agent orchestration":
    "docs/guides/building-flows/aiswarms.md",
  "MCP Client": "docs/guides/building-flows/mcp-client.md",
  "Monitoring Executions": "docs/guides/monitoring-executions.md",
  "Administrating the platform":
    "docs/guides/administrating-the-platform.md",
  "AIRooms : Turning prompts into powerful actions": "docs/guides/airooms.md",
  "Import a flow from our template library": "docs/guides/import-a-flow.md",
  Integrations: "docs/integrations/index.md",
  Support: "docs/support.md",
};

/**
 * Slugify a title for integration pages not in the PATH_MAP
 */
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Recursively fetch child pages from Notion
 */
async function fetchChildPages(pageId) {
  const pages = [];
  const children = await notion.blocks.children.list({ block_id: pageId });

  for (const block of children.results) {
    if (block.type === "child_page") {
      const title = block.child_page.title;
      pages.push({ id: block.id, title });

      // Recurse into child pages
      const subPages = await fetchChildPages(block.id);
      pages.push(...subPages);
    }
  }

  return pages;
}

/**
 * Convert a Notion page to Markdown
 */
async function pageToMarkdown(pageId) {
  const blocks = await notion.blocks.children.list({ block_id: pageId });
  let markdown = "";

  for (const block of blocks.results) {
    switch (block.type) {
      case "paragraph":
        markdown +=
          block.paragraph.rich_text.map((t) => t.plain_text).join("") + "\n\n";
        break;
      case "heading_1":
        markdown +=
          "# " +
          block.heading_1.rich_text.map((t) => t.plain_text).join("") +
          "\n\n";
        break;
      case "heading_2":
        markdown +=
          "## " +
          block.heading_2.rich_text.map((t) => t.plain_text).join("") +
          "\n\n";
        break;
      case "heading_3":
        markdown +=
          "### " +
          block.heading_3.rich_text.map((t) => t.plain_text).join("") +
          "\n\n";
        break;
      case "bulleted_list_item":
        markdown +=
          "- " +
          block.bulleted_list_item.rich_text
            .map((t) => t.plain_text)
            .join("") +
          "\n";
        break;
      case "numbered_list_item":
        markdown +=
          "1. " +
          block.numbered_list_item.rich_text
            .map((t) => t.plain_text)
            .join("") +
          "\n";
        break;
      case "code":
        const lang = block.code.language || "";
        markdown +=
          "```" +
          lang +
          "\n" +
          block.code.rich_text.map((t) => t.plain_text).join("") +
          "\n```\n\n";
        break;
      case "image":
        const url =
          block.image.type === "external"
            ? block.image.external.url
            : block.image.file.url;
        const caption = block.image.caption
          .map((t) => t.plain_text)
          .join("");
        markdown += `![${caption}](${url})\n\n`;
        break;
      case "divider":
        markdown += "---\n\n";
        break;
      case "callout":
        const text = block.callout.rich_text
          .map((t) => t.plain_text)
          .join("");
        markdown += `:::note\n${text}\n:::\n\n`;
        break;
      default:
        // Skip unsupported block types
        break;
    }
  }

  return markdown;
}

/**
 * Main sync function
 */
async function main() {
  console.log("Starting Notion sync...");

  // Fetch all pages from the Help Center
  const pages = await fetchChildPages(ROOT_PAGE_ID);
  console.log(`Found ${pages.length} pages in Notion`);

  let synced = 0;
  let skipped = 0;

  for (const page of pages) {
    // Determine the output file path
    let filePath = PATH_MAP[page.title];

    if (!filePath) {
      // Try as an integration page
      const slug = slugify(page.title);
      const integrationPath = `docs/integrations/${slug}.md`;
      if (fs.existsSync(integrationPath)) {
        filePath = integrationPath;
      } else {
        console.log(`  Skipping unmapped page: "${page.title}"`);
        skipped++;
        continue;
      }
    }

    try {
      // Fetch the page content as markdown
      const markdown = await pageToMarkdown(page.id);

      if (!markdown.trim()) {
        console.log(`  Skipping empty page: "${page.title}"`);
        skipped++;
        continue;
      }

      // Read existing file to preserve frontmatter
      const fullPath = path.resolve(filePath);
      let frontmatter = "";

      if (fs.existsSync(fullPath)) {
        const existing = fs.readFileSync(fullPath, "utf-8");
        const fmMatch = existing.match(/^---\n([\s\S]*?)\n---/);
        if (fmMatch) {
          frontmatter = `---\n${fmMatch[1]}\n---\n\n`;
        }
      }

      // Write the updated file
      const dir = path.dirname(fullPath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(fullPath, frontmatter + markdown);

      console.log(`  Synced: "${page.title}" -> ${filePath}`);
      synced++;
    } catch (err) {
      console.error(`  Error syncing "${page.title}": ${err.message}`);
    }
  }

  console.log(
    `\nSync complete: ${synced} synced, ${skipped} skipped, ${pages.length} total`
  );
}

main().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
