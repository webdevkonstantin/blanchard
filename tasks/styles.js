// const map = require("gulp-sourcemaps");
// const bulk = require("gulp-sass-bulk-importer");
const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
// const prettier = require("gulp-prettier");
const browserSync = require("browser-sync").create();
const path = require("./path");

module.exports = function styles() {
  return (
    src(path.src.scss)
      // .pipe(map.init())
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      // .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(
        prefixer({
          cascade: false,
          grid: true,
          overrideBrowserslist: ["last 8 versions"],
          browsers: [
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 24",
            "Explorer >= 11",
            "iOS >= 6",
            "Opera >= 12",
            "Safari >= 6",
          ],
        })
      )
      // .pipe(prettier())
      .pipe(
        clean({
          level: 2,
        })
      )
      .pipe(concat("style.min.css"))
      // .pipe(map.write("../sourcemaps/"))
      .pipe(dest(path.build.css))
      .pipe(browserSync.stream())
  );
};
