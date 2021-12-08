const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const imagemin = require("gulp-imagemin");
const recompress = require("imagemin-jpeg-recompress");
const pngquant = require("imagemin-pngquant");
const size = require("gulp-size");
const browserSync = require("browser-sync");
const path = require("./path");

module.exports = function rastr() {
  return src(path.src.img + ".+(png|jpg|jpeg|gif|svg|ico)")
    .pipe(
      size({
        title: "Uncompressed:",
        showFiles: true,
        uncompressed: true,
      })
    )
    .pipe(changed(path.build.img))
    .pipe(
      imagemin(
        {
          interlaced: true,
          progressive: true,
          optimizationLevel: 3,
        },
        [
          imagemin.svgo({
            plugins: [
              { removeViewBox: false },
              { removeUselessStrokeAndFill: false },
              { cleanupIDs: false },
            ],
          }),
          recompress({
            loops: 6,
            min: 50,
            max: 90,
            quality: "high",
            use: [
              pngquant({
                quality: [0.8, 1],
                strip: true,
                speed: 1,
              }),
            ],
          }),
          imagemin.gifsicle(),
          imagemin.mozjpeg({ quality: 75 }),
          imagemin.optipng(),
        ]
      )
    )
    .pipe(
      size({
        title: "Compressed:",
        showFiles: true,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browserSync.stream());
};
