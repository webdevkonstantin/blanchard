const { src, dest } = require("gulp");
const svgmin = require("gulp-svgmin");
const sprite = require("gulp-svg-sprite");
const path = require("./path");

module.exports = function svg_sprite() {
  return src(path.src.svg)
    .pipe(
      svgmin({
        plugins: ["removeComments", "removeEmptyContainers"],
      })
    )
    .pipe(
      sprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest(path.dest.img));
};
