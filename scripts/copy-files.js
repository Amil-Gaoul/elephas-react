/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copyPackageJson(fromFile, toFile) {
  const sourcePackageJson = JSON.parse(fs.readFileSync(fromFile).toString());

  const destPackageJson = {
    ...sourcePackageJson,
  };

  destPackageJson.scripts = undefined;
  destPackageJson.devDependencies = undefined;

  fs.writeFileSync(toFile, JSON.stringify(destPackageJson, null, 2));

  console.log('"package.json" was copied to "/build"');
}

function main() {
  const cwd = process.cwd();
  const sourceFilePath = path.join(cwd, 'package.json');
  const destFilePath = path.join(cwd, 'build', 'package.json');
  copyPackageJson(sourceFilePath, destFilePath);

  const licenseSourceFilePath = path.join(cwd, '../..', 'LICENSE');
  const licenseDestFilePath = path.join(cwd, 'build', 'LICENSE');

  fs.copyFile(licenseSourceFilePath, licenseDestFilePath, (err) => {
    if (err) throw err;
    console.log('"LICENSE" was copied to "/build"');
  });
}

main();
