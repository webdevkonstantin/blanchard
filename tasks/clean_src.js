const del = require("del");
const path = require("./path.js");

module.exports = function clean_src() {
  // return del([path.clean_src.html, path.clean_src.css, path.clean_src.js, path.clean_src.fonts, path.clean_src.img]);
  return del([path.clean_src]);
};
