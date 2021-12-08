const { watch, parallel, series } = require("gulp");
const browserSync = require("browser-sync").create();
const path = require("./path");

module.exports = function browsersync() {
  browserSync.init({
    server: {
      baseDir: path.destDir,
      host: "192.168.0.13",
    },
    // callbacks: {
    //   ready: function (err, bs) {
    //     bs.addMiddleware("*", function (req, res) {
    //       res.writeHead(302, {
    //         location: "404.html",
    //       });
    //       res.end("Redirecting!");
    //     });
    //   },
    // },
    browser: "chrome",
    logPrefix: "BS-HTML:",
    logLevel: "info",
    logConnections: true,
    logFileChanges: true,
    open: true,
  });

  watch(path.watch.html).on("change", browserSync.reload);
  watch([path.watch.scss_components, path.watch.scss]).on("change", browserSync.reload);
  watch([path.watch.js_components, path.watch.js]).on("change", browserSync.reload);
};
