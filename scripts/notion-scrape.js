#!/usr/bin/env node

/**
 * Mindflow Help Center Scraper for Docusaurus
 *
 * Scrapes the public Help Center at docs.mindflow.io (Notaku-rendered Notion)
 * and converts HTML content to Markdown files for Docusaurus.
 *
 * No API token needed — all content is publicly accessible.
 *
 * Usage:
 *   node scripts/notion-scrape.js
 *
 * Requirements:
 *   npm install cheerio turndown
 */

const cheerio = require("cheerio");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");

// ── Configuration ──────────────────────────────────────────────────────────────

const BASE_URL = "https://docs.mindflow.io";

// All pages to scrape: [URL path, Docusaurus file path, frontmatter overrides]
const PAGES = [
  // Getting Started
  {
    url: "/getting-started",
    file: "docs/getting-started/index.md",
    fm: { sidebar_position: 1, slug: "/getting-started" },
  },
  {
    url: "/getting-started/overview",
    file: "docs/getting-started/overview.md",
    fm: { sidebar_position: 1 },
  },
  {
    url: "/getting-started/sign-in",
    file: "docs/getting-started/sign-in.md",
    fm: { sidebar_position: 2 },
  },
  {
    url: "/getting-started/basics",
    file: "docs/getting-started/basics.md",
    fm: { sidebar_position: 3 },
  },
  {
    url: "/getting-started/quickstart",
    file: "docs/getting-started/quickstart.md",
    fm: { sidebar_position: 4 },
  },
  {
    url: "/getting-started/no-code-best-practices",
    file: "docs/getting-started/no-code-best-practices.md",
    fm: { sidebar_position: 5 },
  },

  // Guides
  {
    url: "/guides",
    file: "docs/guides/index.md",
    fm: { sidebar_position: 2, slug: "/guides" },
  },
  {
    url: "/guides/training",
    file: "docs/guides/training.md",
    fm: { sidebar_position: 1 },
  },
  {
    url: "/guides/building-flows",
    file: "docs/guides/building-flows/index.md",
    fm: { sidebar_position: 2, slug: "/guides/building-flows" },
  },
  {
    url: "/guides/building-flows/start-a-flow-from-a-template",
    file: "docs/guides/building-flows/start-a-flow-from-a-template.md",
    fm: { sidebar_position: 1 },
  },
  {
    url: "/guides/building-flows/trigger-your-flow",
    file: "docs/guides/building-flows/trigger-your-flow.md",
    fm: { sidebar_position: 2 },
  },
  {
    url: "/guides/building-flows/reach-out-to-services",
    file: "docs/guides/building-flows/reach-out-to-services.md",
    fm: { sidebar_position: 3 },
  },
  {
    url: "/guides/building-flows/work-with-data",
    file: "docs/guides/building-flows/work-with-data.md",
    fm: { sidebar_position: 4 },
  },
  {
    url: "/guides/building-flows/run-a-nested-flow",
    file: "docs/guides/building-flows/run-a-nested-flow.md",
    fm: { sidebar_position: 5 },
  },
  {
    url: "/guides/building-flows/report-executions-by-email",
    file: "docs/guides/building-flows/report-executions-by-email.md",
    fm: { sidebar_position: 6 },
  },
  {
    url: "/guides/building-flows/handy-tools",
    file: "docs/guides/building-flows/handy-tools.md",
    fm: { sidebar_position: 7 },
  },
  {
    url: "/guides/building-flows/use-ai-agent",
    file: "docs/guides/building-flows/use-ai-agent.md",
    fm: { sidebar_position: 8 },
  },
  {
    url: "/guides/building-flows/run-a-script",
    file: "docs/guides/building-flows/run-a-script.md",
    fm: { sidebar_position: 9 },
  },
  {
    url: "/guides/building-flows/aibuild:-faster-flow-creation",
    file: "docs/guides/building-flows/aibuild.md",
    fm: {
      sidebar_position: 10,
      slug: "/guides/building-flows/aibuild:-faster-flow-creation",
    },
  },
  {
    url: "/guides/building-flows/aitask:-prompt-guidelines",
    file: "docs/guides/building-flows/aitask.md",
    fm: {
      sidebar_position: 11,
      slug: "/guides/building-flows/aitask:-prompt-guidelines",
    },
  },
  {
    url: "/guides/building-flows/aiswarms:-multi-agent-orchestration",
    file: "docs/guides/building-flows/aiswarms.md",
    fm: {
      sidebar_position: 12,
      slug: "/guides/building-flows/aiswarms:-multi-agent-orchestration",
    },
  },
  {
    url: "/guides/building-flows/mcp-client",
    file: "docs/guides/building-flows/mcp-client.md",
    fm: { sidebar_position: 13 },
  },
  {
    url: "/guides/monitoring-executions",
    file: "docs/guides/monitoring-executions.md",
    fm: { sidebar_position: 3 },
  },
  {
    url: "/guides/administrating-the-platform",
    file: "docs/guides/administrating-the-platform.md",
    fm: { sidebar_position: 4 },
  },
  {
    url: "/guides/airooms-:-turning-prompts-into-powerful-actions",
    file: "docs/guides/airooms.md",
    fm: {
      sidebar_position: 5,
      slug: "/guides/airooms-:-turning-prompts-into-powerful-actions",
    },
  },
  {
    url: "/guides/import-a-flow-from-our-template-library",
    file: "docs/guides/import-a-flow.md",
    fm: {
      sidebar_position: 6,
      slug: "/guides/import-a-flow-from-our-template-library",
    },
  },

  // Integrations (index)
  {
    url: "/integrations",
    file: "docs/integrations/index.md",
    fm: { sidebar_position: 3, slug: "/integrations" },
  },

  // Support
  {
    url: "/support",
    file: "docs/support.md",
    fm: { sidebar_position: 5, slug: "/support" },
  },
];

// Integration pages — auto-discovered from the integrations index page
const KNOWN_INTEGRATIONS = [
  "auth0",
  "atlassian",
  "aws",
  "bitwarden",
  "cisco-meraki-dashboard",
  "crowdstrike",
  "elastic-cloud",
  "eset",
  "facebook",
  "google",
  "greynoise",
  "hashicorp-vault",
  "jamf-pro",
  "microsoft",
  "onelogin",
  "okta",
  "pagerduty",
  "phish-report",
  "salesforce",
  "semgrep",
  "sentinelone",
  "servicenow",
  "slack",
  "sophos",
  "urlscan.io",
  "virustotal",
  "wiz",
  "zabbix",
];

// ── Turndown (HTML → Markdown) setup ───────────────────────────────────────────

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// Preserve Docusaurus-compatible admonitions from callout blocks
turndown.addRule("callout", {
  filter: (node) => {
    const cls = node.getAttribute ? node.getAttribute("class") || "" : "";
    return cls.includes("callout") || cls.includes("notion-callout");
  },
  replacement: (content) => `\n:::note\n${content.trim()}\n:::\n\n`,
});

// Clean up images
turndown.addRule("images", {
  filter: "img",
  replacement: (_content, node) => {
    const src = node.getAttribute("src") || "";
    const alt = node.getAttribute("alt") || "";
    if (!src || src.startsWith("data:")) return "";
    return `![${alt}](${src})\n\n`;
  },
});

// ── Fetch helpers ──────────────────────────────────────────────────────────────

async function fetchPage(urlPath) {
  const fullUrl = `${BASE_URL}${urlPath}`;
  const response = await fetch(fullUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; MindflowDocsScraper/1.0; +https://github.com/jb-mindflow/documentation-mindflow)",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${fullUrl}`);
  }

  return response.text();
}

function extractContent(html) {
  const $ = cheerio.load(html);

  // Get the page title from h1 or <title>
  const title =
    $("main h1").first().text().trim() ||
    $("h1").first().text().trim() ||
    $("title").text().trim();

  // Get main content area
  const $main = $("main").first();
  if (!$main.length) return { title, markdown: "" };

  // Remove navigation, buttons, and other non-content elements
  $main.find("nav, button, header, footer, [role=navigation]").remove();

  // Remove the first h1 (title) — we add it back via frontmatter
  $main.find("h1").first().remove();

  // Convert internal links to relative Docusaurus paths
  $main.find("a[href]").each((_i, el) => {
    const href = $(el).attr("href");
    if (href && href.startsWith("/") && !href.startsWith("//")) {
      // Keep internal links as-is — they match our Docusaurus routing
      $(el).attr("href", href);
    }
  });

  // Convert to markdown
  const contentHtml = $main.html() || "";
  const markdown = turndown.turndown(contentHtml).trim();

  return { title, markdown };
}

// ── File writing ───────────────────────────────────────────────────────────────

function buildFrontmatter(title, fm) {
  const safeTitle = title.includes(":") ? `"${title}"` : title;
  const fields = { title: safeTitle, ...fm };

  let str = "---\n";
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === "string" && value.includes(":") && !value.startsWith('"')) {
      str += `${key}: "${value}"\n`;
    } else {
      str += `${key}: ${value}\n`;
    }
  }
  str += "---\n\n";
  return str;
}

function writeDoc(filePath, title, markdown, fm) {
  const fullPath = path.resolve(filePath);
  const dir = path.dirname(fullPath);
  fs.mkdirSync(dir, { recursive: true });

  const frontmatter = buildFrontmatter(title, fm);
  const content = frontmatter + `# ${title}\n\n` + markdown + "\n";

  fs.writeFileSync(fullPath, content, "utf-8");
}

// ── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Mindflow Help Center Scraper ===");
  console.log(`Source: ${BASE_URL}\n`);

  let written = 0;
  let failed = 0;

  // Scrape main pages
  for (const page of PAGES) {
    try {
      process.stdout.write(`Scraping ${page.url} ... `);
      const html = await fetchPage(page.url);
      const { title, markdown } = extractContent(html);

      if (!markdown) {
        console.log(`SKIP (empty content)`);
        continue;
      }

      writeDoc(page.file, title, markdown, page.fm);
      console.log(`OK → ${page.file}`);
      written++;
    } catch (err) {
      console.log(`FAIL: ${err.message}`);
      failed++;
    }

    // Small delay to be respectful
    await new Promise((r) => setTimeout(r, 500));
  }

  // Scrape integration pages (auto-discover from known list)
  console.log("\n--- Integration pages ---\n");

  for (const slug of KNOWN_INTEGRATIONS) {
    const urlPath = `/integrations/${slug}`;
    // Map to Docusaurus file (normalize slug for filesystem)
    const fileSlug = slug.replace(/\./g, "").replace(/\s+/g, "-").toLowerCase();
    const filePath = `docs/integrations/${fileSlug}.md`;

    try {
      process.stdout.write(`Scraping ${urlPath} ... `);
      const html = await fetchPage(urlPath);
      const { title, markdown } = extractContent(html);

      if (!markdown) {
        console.log(`SKIP (empty)`);
        continue;
      }

      const pos =
        KNOWN_INTEGRATIONS.indexOf(slug) + 1;
      writeDoc(filePath, title, markdown, { sidebar_position: pos });
      console.log(`OK → ${filePath}`);
      written++;
    } catch (err) {
      console.log(`FAIL: ${err.message}`);
      failed++;
    }

    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(`\n=== Done: ${written} written, ${failed} failed ===`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
