const { src } = require("gulp");
const ftp = require("vinyl-ftp");
const chalk = require("chalk");
const db = require("./mongodb");

const projectDir = db.projectName + "/";

module.exports = function deploy(done) {
  db.getCollection("_ftp_settings")
    .then((data) => {
      const ftpSettings = data[0];
      const connect = ftp.create(ftpSettings);
      const targetDir = ftpSettings.rootDir + projectDir;

      src(["build/**/*.*"]).pipe(connect.newer(targetDir)).pipe(connect.dest(targetDir));

      return ftpSettings;
    })
    .then((ftpSettings) => {
      done(
        console.log(
          chalk.green.bold(
            `Deploing from ${chalk.cyan.underline.bold(
              projectDir + "build/"
            )} to ${chalk.cyan.underline.bold(
              "http://" + ftpSettings.host + "/" + ftpSettings.rootDir + projectDir
            )} successfully finished`
          )
        )
      );
    })
    .catch((err) => {
      done(console.log(chalk.red.underline.bold(err)));
    });
};
