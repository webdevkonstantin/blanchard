const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const ttf2woff2 = require("gulp-ttftowoff2");
const ttf2woff = require("gulp-ttf2woff");
const path = require("./path");

module.exports = function ttf(done) {
  src(`${path.src.fonts}.ttf`)
    .pipe(
      changed(path.build.fonts, {
        extension: ".woff2",
        hasChanged: changed.compareLastModifiedTime,
      })
    )
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts));

  src(path.src.fonts_ttf)
    .pipe(
      changed(path.build.fonts, {
        extension: "woff",
        hasChanged: changed.compareLastModifiedTime,
      })
    )
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts));
  done();
};
