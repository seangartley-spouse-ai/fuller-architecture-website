const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
const localAssets = [...html.matchAll(/(?:src|href)="((?!https?:|mailto:|tel:|#)[^"?]+)(?:\?[^"]*)?"/g)]
  .map((match) => match[1]);
const missingPageAssets = [...new Set(localAssets.filter((asset) => !fs.existsSync(asset)))];

const context = {};
vm.createContext(context);
vm.runInContext(
  `${fs.readFileSync("data/projects.js", "utf8")};globalThis.__projects = PROJECTS`,
  context
);

const missingProjectImages = [];
for (const project of context.__projects) {
  for (const image of project.images || []) {
    const path = `images/${project.folder}/${image}`;
    if (!fs.existsSync(path)) missingProjectImages.push(path);
  }
}

const result = {
  duplicateIds,
  missingPageAssets,
  projects: context.__projects.length,
  missingProjectImages
};

console.log(JSON.stringify(result, null, 2));
process.exitCode = duplicateIds.length || missingPageAssets.length || missingProjectImages.length ? 1 : 0;
