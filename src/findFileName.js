const { readFile } = require('./fsHelper');

const find = async (filePath, name) => {
  const file = await readFile(filePath, 'utf8');
  const res = file.match(new RegExp(name, 'g'));
  if (!res) {
    console.log(`${name} does not exist in file ${filePath}`);
    return;
  }
  console.log(`"${name}" found ${res.length} times.`);
};

module.exports = find;
