import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const browser = process.argv[2];

if (!["chrome", "firefox"].includes(browser)) {
  console.error("Usage: node scripts/build-extension.mjs <chrome|firefox>");
  process.exit(1);
}

const root = process.cwd();
const outputDir = path.join(root, "dist", browser);
const manifestPath = path.join(root, "manifests", `${browser}.json`);

if (existsSync(outputDir)) {
  rmSync(outputDir, { recursive: true, force: true });
}

mkdirSync(outputDir, { recursive: true });

console.log(`\nBuilding ${browser} extension...\n`);

execSync(`vite build --outDir dist/${browser}`, {
  stdio: "inherit",
});

cpSync(
  manifestPath,
  path.join(outputDir, "manifest.json")
);

console.log(`\n✓ ${browser} extension built successfully`);
console.log(`→ dist/${browser}/`);