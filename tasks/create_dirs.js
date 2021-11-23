const fs = require("fs");
const chalk = require("chalk");
// const path = require("./path.js");
const mkdirp = require("mkdirp");
const db = require("./mongodb");

module.exports = function create_dirs(done) {
  db.getCollection("_src_dirs")
    .then((directories) => {
      if (directories.length > 0) {
        directories.forEach(function (directory, i) {
          // console.log("directory:", directory);
          //check if folder already exists
          if (!fs.existsSync(directory.name)) {
            //creating folder
            mkdirp(directory.name)
              .then(
                console.log(
                  chalk.green.bold(
                    `Directory ${chalk.cyan.underline.bold(directory.name)} successfully created `
                  )
                )
              )
              .then(() => {
                if (i == directories.length - 1) done();
              })
              .catch((err) => {
                done(console.log(chalk.red.underline.bold(err)));
              });
          } else {
            done();
          }
        });
      }
    })
    .catch((err) => {
      done(console.log(chalk.red.underline.bold(err)));
    });
};
