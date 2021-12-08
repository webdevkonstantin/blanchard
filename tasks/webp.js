const { src, dest } = require("gulp");
const webpConv = require("gulp-webp");
const changed = require("gulp-changed");
// const multiDest = require("gulp-multi-dest");
const plumber = require("gulp-plumber");
const path = require("./path");

module.exports = function webp() {
  return (
    src(path.build.img + "/**/*.+(png|jpg|jpeg)")
      .pipe(plumber())
      .pipe(
        changed(path.build.img, {
          extension: ".webp",
        })
      )
      .pipe(webpConv())
      // .pipe(multiDest(path.build.img));
      .pipe(dest(path.build.img))
  );
};
