const { bootstrap } = require("@kaholo/plugin-library");
const { open } = require("fs/promises");
const { resolve } = require("path");

async function readJsonFile(params) {
  const {
    filePath,
  } = params;

  const absoluteFilePath = resolve(filePath);

  let fileHandle;
  let fileContent;
  try {
    fileHandle = await open(absoluteFilePath, "r");

    fileContent = await fileHandle.readFile({ encoding: "utf-8" });

    JSON.parse(fileContent);
  } finally {
    await fileHandle?.close();
  }

  return fileContent;
}

async function writeJsonFile(params) {
  const {
    filePath,
    json, // parserType:object validates that for us
  } = params;

  const absoluteFilePath = resolve(filePath);
  const jsonString = JSON.stringify(json);

  let fileHandle;
  try {
    fileHandle = await open(absoluteFilePath, "wx");

    await fileHandle.writeFile(
      jsonString,
      { encoding: "utf-8" },
    );
  } finally {
    await fileHandle?.close();
  }
}

module.exports = bootstrap({
  readJsonFile,
  writeJsonFile,
});
