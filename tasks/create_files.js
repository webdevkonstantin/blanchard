const fs = require("fs");
const chalk = require("chalk");
const db = require("./mongodb");

module.exports = function create_files(done) {
  db.getProject()
    .then((project) => {
      return project;
    })
    .then((project) => {
      db.getCollection("_src_files")
        .then((files) => {
          if (files.length > 0) {
            files.forEach((file, i) => {
              if (file.name == "app/index.html") {
                file.content = file.content.replace("%title%", project.title);
                file.content = file.content.replace("%description%", project.description);
              }
              if (file.name == "app/scss/global/_default.scss") {
                file.content = file.content.replace("%fontFamily%", project.fontFamily);
              }
              fs.writeFile(file.name, file.content, (error) => {
                if (error) throw error;
              });
              console.log(
                chalk.green.bold(
                  `File ${chalk.cyan.underline.bold(file.name)} successfully created`
                )
              );
            });
          }
        })
        .then(() => {
          done();
        });
    })
    .catch((err) => {
      done(console.log(chalk.red.underline.bold(err)));
    });
};
