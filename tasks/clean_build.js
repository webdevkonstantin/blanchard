const del = require("del");
const path = require("./path");

module.exports = function clean_build() {
  // return del([path.clean.html, path.clean.css, path.clean.js, path.clean.fonts, path.clean.img]);
  return del([path.clean_build]);
};
