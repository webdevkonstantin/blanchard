const gulp = require("gulp");
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

exports.create_dirs = tasks.create_dirs;
exports.create_files = tasks.create_files;
exports.create_fonts = tasks.create_fonts;
exports.create_libs_min = tasks.create_libs_min;
// exports.create_plugins = tasks.create_plugins;

exports.clean_src = tasks.clean_src;
exports.clean_build = tasks.clean_build;

exports.ttf_to_woff = tasks.ttf_to_woff;
// exports.download_plugins = tasks.download_plugins;

exports.html = tasks.html;
exports.styles = tasks.styles;
exports.scripts = tasks.scripts;
// exports.sprite = tasks.sprite;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;

exports.mongodb = tasks.mongodb;
exports.browsersync = tasks.browsersync;
exports.watch = tasks.watch;
exports.deploy = tasks.deploy;

exports.create_src = gulp.series(
  exports.create_dirs,
  exports.create_files,
  exports.create_fonts
  // exports.create_plugins
);

exports.init_files = gulp.series(
  exports.ttf_to_woff,
  exports.create_libs_min,
  // exports.download_plugins,
  // exports.sprite,
  exports.rastr,
  exports.webp
);

// exports.update_plugins = gulp.series(exports.create_plugins, exports.download_plugins);
exports.update_plugins = gulp.series(exports.create_libs_min);
exports.update_images = gulp.series(/* exports.sprite, */ exports.rastr, exports.webp);
exports.build_html = gulp.series(exports.init_files, exports.html, exports.scripts, exports.styles);
exports.default = gulp.parallel(exports.browsersync, exports.watch);
