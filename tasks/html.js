const { src, dest } = require("gulp");
const include = require("gulp-file-include");
// const prettier = require('gulp-prettier');
const beautify = require("gulp-html-beautify");
const browserSync = require("browser-sync");
const path = require("./path");

module.exports = function html() {
  return (
    src([path.src.html, path.src.not_html_components])
      .pipe(include())
      // .pipe(prettier())
      .pipe(
        beautify({
          indent_with_tabs: false,
          indent_size: 2,
          end_with_newline: false,
        })
      )
      .pipe(dest(path.build.html))
      .pipe(browserSync.stream())
  );
};
