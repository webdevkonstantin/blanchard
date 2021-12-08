const fs = require("fs");
const chalk = require("chalk");
const path = require("./path");

const cssFilePath = `${path.src.page_blocks}/__head/_plugins-css.html`;
const jsFilePath = `${path.src.page_blocks}/_bottom/_plugins-js.html`;

function writeToFile(path, data, message) {
  try {
    fs.writeFileSync(path, data, { flag: "a+" }); //'a+' is append mode

    console.log(chalk.yellow.bold(message));
  } catch (err) {
    console.log(chalk.red.underline.bold(err));
  }
}

function writePluginsToFile(url, type, source) {
  let filePath = type == "css" ? cssFilePath : jsFilePath;
  let messageBegin = type == "css" ? chalk.magenta.bold("CSS <link> ") : "JS <script> ";
  let message =
    messageBegin +
    chalk.green.underline.bold(url) +
    " successfully added to " +
    chalk.green.underline.bold(filePath);

  if (source == "node_modules") {
    let filePathArray = url.split("/");
    let fileName = filePathArray[filePathArray.length - 1];
    url = `${type}/plugins/${fileName}`;

    message =
      messageBegin +
      chalk.cyan.underline.bold(url) +
      " successfully added to " +
      chalk.cyan.underline.bold(filePath);
  }

  let writeData =
    type == "css"
      ? `<link rel="stylesheet" href="${url}" />\r\n`
      : `<script src="${url}"></script>\r\n`;

  writeToFile(filePath, writeData, message);
}

function checkPluginsAndWrite(plugins, type, source) {
  if (plugins.length > 0) {
    plugins.forEach((url) => {
      writePluginsToFile(url, type, source);
    });
  }
}

// Export it to make it available outside
module.exports.cssFilePath = cssFilePath;
module.exports.jsFilePath = jsFilePath;
module.exports.checkPluginsAndWrite = checkPluginsAndWrite;
// module.exports.writePluginsToFile = writePluginsToFile;
