const { watch, parallel, series } = require("gulp");
// const browserSync = require("browser-sync").create();
const path = require("./path");

module.exports = function watching() {
  // watch(path.watch.json, series("create_plugins", "download_plugins", "html"));
  watch(path.watch.html, parallel("html"));
  // watch("src/**/*.php", parallel("php"));
  watch([path.watch.scss], parallel("styles"));
  watch([path.watch.js], parallel("scripts"));
  watch("src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)", parallel("rastr"));
  // watch("build/img/**/*.+(png|jpg|jpeg)", parallel("webp"));
  // watch("src/svg/css/**/*.svg", series("svg_css", "style"));
  // watch("src/svg/sprite/**/*.svg", series("svg_sprite", "rastr"));
  watch(path.watch.fonts_ttf, series("create_fonts", "ttf_to_woff"));
};
