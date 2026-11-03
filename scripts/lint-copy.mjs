// Faalt als er een em dash (U+2014) of en dash (U+2013) in src/ staat.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const forbidden = /[–—]/;
const hits = [];

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(astro|md|mdx|ts|js|mjs|json|css|html)$/.test(name)) {
      readFileSync(path, "utf8")
        .split("\n")
        .forEach((line, i) => {
          if (forbidden.test(line))
            hits.push(`${path}:${i + 1}: ${line.trim()}`);
        });
    }
  }
};

walk("src");

if (hits.length) {
  console.error(`Em of en dash gevonden (${hits.length}):\n${hits.join("\n")}`);
  process.exit(1);
}
console.log("lint:copy: geen em of en dashes gevonden in src/.");
