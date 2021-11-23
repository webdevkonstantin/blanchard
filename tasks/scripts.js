const { src, dest } = require("gulp");
const include = require("gulp-file-include");
// const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
// const map = require('gulp-sourcemaps');
const browserSync = require("browser-sync").create();
const path = require("./path.js");

module.exports = function scripts() {
  return (
    src([/*path.src.js_components, */ path.src.js])
      .pipe(include())
      //.pipe(map.init())
      //.pipe(uglify()) //Сожмем наш js
      .pipe(concat("main.js"))
      .pipe(dest(path.build.js))
      .pipe(browserSync.stream())
  );
};
