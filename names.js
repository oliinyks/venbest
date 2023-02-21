const fs = require("fs").promises;
const path = require("path");
const namesPath = path.join(__dirname, "names.json");

const listNames = async () => {
  try {
    const data = await fs.readFile(namesPath);
    const names = JSON.parse(data);
    return names;
  } catch (error) {
    console.error(error);
  }
};

module.exports = listNames;
