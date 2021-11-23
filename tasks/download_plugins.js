const { src, dest } = require("gulp");
// const sass = require("gulp-sass")(require("sass"));
// const uglify = require("gulp-uglify-es").default;
// const concat = require("gulp-concat");
// const map = require("gulp-sourcemaps");
const chalk = require("chalk");
const path = require("./path.js");
const db = require("./mongodb");

module.exports = function download_plugins(done) {
  db.getProjectDataByParam("plugins")
    // добавляем сначала css плагины
    .then((pluginsObj) => {
      const plugins = pluginsObj.css.node_modules;
      if (plugins.length > 0) {
        plugins.forEach((plugin) => {
          src(plugin).pipe(dest(path.build.css_libs));
          console.log(
            chalk.blue.bold(
              `CSS plugin ${chalk.cyan.underline.bold(
                plugin
              )} successfully loaded to ${chalk.cyan.underline.bold(path.build.css_libs)}  `
            )
          );
        });
        // src(plugins)
        // .pipe(map.init())
        // .pipe(sass({outputStyle: "compressed",}).on("error", sass.logError))
        // .pipe(concat("libs.min.css"))
        // .pipe(map.write("../sourcemaps/"))
        // .pipe(dest(path.build.css_libs));
      } else {
        return done(console.log(chalk.red.bold("CSS plugins were not loaded.")));
      }

      return pluginsObj;
    })
    // потом добавляем js плагины
    .then((pluginsObj) => {
      const plugins = pluginsObj.js.node_modules;
      if (plugins.length > 0) {
        plugins.forEach((plugin) => {
          src(plugin).pipe(dest(path.build.js_libs));
          console.log(
            chalk.yellow.bold(
              `JS plugin ${chalk.cyan.underline.bold(
                plugin
              )} successfully loaded to ${chalk.cyan.underline.bold(path.build.js_libs)} `
            )
          );
        });
        // src(plugins)
        // .pipe(map.init())
        // .pipe(concat("libs.min.js"))
        // .pipe(uglify()) //Сожмем наш js
        // .pipe(map.write("../sourcemaps/"))
        // .pipe(dest(path.build.js_libs));
      } else {
        return done(console.log(chalk.red.bold("JS plugins were not loaded.")));
      }
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(console.log(chalk.red.underline.bold(err)));
    });
};
