const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const DATA_FILE = path.join(__dirname, "..", "data", "issues.json");

async function readIssues() {
  try {
    const text = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(text);
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}
ASY;
