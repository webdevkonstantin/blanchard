const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const clean = require("gulp-clean-css");
const fs = require("fs");
const chalk = require("chalk");
const path = require("./path");
const db = require("./mongodb");

const cssFilePath = `${path.src.page_blocks}/__head/_plugins-css.html`;
const jsFilePath = `${path.src.page_blocks}/_bottom/_plugins-js.html`;

module.exports = function create_libs_min(done) {
  db.getProjectDataByParam("plugins")
    .then((pluginsObj) => {
      // создаем сначала сжатый css файл с плагинами и добавляем его в папку css
      const pluginsCSS = pluginsObj.css.node_modules;
      if (pluginsCSS.length > 0) {
        src(pluginsCSS)
          // .pipe(map.init())
          .pipe(
            sass({
              outputStyle: "compressed",
            }).on("error", sass.logError)
          )
          .pipe(
            clean({
              level: 2,
            })
          )
          .pipe(concat("libs.min.css"))
          // .pipe(map.write("../sourcemaps/"))
          .pipe(dest(path.build.css));

        console.log(
          chalk.magenta.bold(
            `CSS file ${chalk.cyan.underline.bold(
              "libs.min.css"
            )} successfully added to ${chalk.cyan.underline.bold(path.build.css)}  `
          )
        );

        let url = `css/libs.min.css`;
        let writeData = `<link rel="stylesheet" href="${url}">`;

        fs.writeFile(cssFilePath, writeData, function (error) {
          if (error) throw error; // если возникла ошибка
          let data = fs.readFileSync(cssFilePath, "utf8");

          console.log(
            chalk.magenta.bold(
              `CSS ${chalk.green.underline.bold(
                data
              )} successfully added to ${chalk.green.underline.bold(cssFilePath)}`
            )
          );
        });
      } else {
        fs.writeFile(cssFilePath, "", () => {});
        return done(console.log(chalk.red.bold("CSS libs were not added.")));
      }

      return pluginsObj;
    })
    // потом создаем сжатый js файл с плагинами/библиотеками и добавляем его в папку js
    .then((pluginsObj) => {
      const pluginsJS = pluginsObj.js.node_modules;
      if (pluginsJS.length > 0) {
        src(pluginsJS)
          // .pipe(map.init())
          .pipe(concat("libs.min.js"))
          .pipe(uglify()) //Сожмем наш js
          // .pipe(map.write("../sourcemaps/"))
          .pipe(dest(path.build.js));

        console.log(
          chalk.yellow.bold(
            `JS file ${chalk.cyan.underline.bold(
              "libs.min.js"
            )} successfully added to ${chalk.cyan.underline.bold(path.build.js)} `
          )
        );

        let url = `js/libs.min.js`;
        let writeData = `<script src="${url}"></script>`;

        fs.writeFile(jsFilePath, writeData, function (error) {
          if (error) throw error; // если возникла ошибка
          let data = fs.readFileSync(jsFilePath, "utf8");

          console.log(
            chalk.yellow.bold(
              `JS ${chalk.green.underline.bold(
                data
              )} successfully added to ${chalk.green.underline.bold(jsFilePath)}`
            )
          );
        });
      } else {
        fs.writeFile(jsFilePath, "", () => {});
        return done(console.log(chalk.red.bold("JS libs were not added.")));
      }
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(console.log(chalk.red.underline.bold(err)));
    });
};
