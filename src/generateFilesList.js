const generateName = require('random-name');
const moment = require('moment');
const { writeFile } = require('./fsHelper');

const generateFileName = (extension) => {
  const name = generateName();
  return name.toLowerCase().replace(' ', '.') + extension;
};

const generateAsString = (quantity, extensions) => {
  const str = [...Array(quantity)].reduce((res, _, i, arr) => {
    const extension = extensions[i % extensions.length];
    return i === arr.length - 1
      ? `${res}${generateFileName(extension)}`
      : `${res}${generateFileName(extension)}, `;
  }, '');
  console.log(str);
};

const generateAsFile = async (quantity, extensions) => {
  const str = [...Array(quantity)].reduce((res, _, i, arr) => {
    const extension = extensions[i % extensions.length];
    return i === arr.length - 1
      ? `${res}${generateFileName(extension)}`
      : `${res}${generateFileName(extension)}, `;
  }, '');
  const filePath = `output/file_names_${moment().format('YYYY_MM_DD_HH_mm_ss')}.txt`;
  await writeFile(filePath, str);
  console.log(`See ${filePath}`);
};

module.exports = {
  generateAsFile,
  generateAsString,
};
