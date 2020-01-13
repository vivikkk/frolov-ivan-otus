const fs = require('fs');
const path = require('path');

const nameOfResultFile = 'result.txt';
const getValue = (flag) => {
  const index = process.argv.indexOf(flag);

  return (index > -1) ? process.argv[index + 1] : null;
};
const dirName = getValue('-d');
const resultObj = {
  'files': [],
  'dirs': []
};

resultObj.dirs.push(dirName);

function tree(dirPath) {
  fs.readdirSync(dirPath).forEach((name) => {
    const filePath = path.join(dirPath, name);
    const stat = fs.statSync(filePath);

    if (stat.isFile())
      return resultObj.files.push(filePath);

    resultObj.dirs.push(filePath);
    tree(filePath);
  });
};

fs.access(dirName, fs.F_OK, (err) => {
  if (err)
    return console.log(`Папки ${dirName} не существует`);

  tree(dirName);
  fs.writeFile(nameOfResultFile, JSON.stringify(resultObj), error => {
    if (error) throw error;

    console.log(`Файл ${nameOfResultFile} создан`);
  });
})
