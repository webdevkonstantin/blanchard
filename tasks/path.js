const fs = require("fs");
const srcDir = `app`;
const destDir = `build`;

module.exports = path = {
  srcDir: srcDir,
  destDir: destDir,
  build: {
    //Тут мы укажем куда отправлять по завершению готовые после сборки файлы
    html: destDir,
    js: `${destDir}/js`,
    js_libs: `${destDir}/js/plugins`,
    css: `${destDir}/css`,
    css_libs: `${destDir}/css/plugins`,
    img: `${destDir}/img`,
    fonts: `${destDir}/fonts`,
  },
  dest: {
    //Тут мы укажем куда складывать собранные файлы
    html: srcDir,
    js: `${srcDir}/js/`,
    js_libs: `${srcDir}/js/plugins/`,
    css: `${srcDir}/css/`,
    css_libs: `${srcDir}/css/plugins/`,
    img: `${srcDir}/img/`,
    fonts: `${srcDir}/fonts/`,
  },
  src: {
    //Пути откуда брать исходники
    html: `${srcDir}/*.html`, //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    html_components: `${srcDir}/__page/**/*.html`,
    not_html_components: `!${srcDir}/__page/**/*.html`,
    pug: `${srcDir}/pug/*.pug`,
    js: `${srcDir}/js/main.js`,
    js_dest: `${srcDir}/js/`,
    js_components: `${srcDir}/__page/**/*.js`,
    sass: `${srcDir}/sass/*.sass`,
    scss: `${srcDir}/scss/*.scss`,
    css: `${srcDir}/css/*`,
    css_dest: `${srcDir}/css`,
    img: `${srcDir}/img/**/*`, //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    svg: `${srcDir}/svg/**/*.svg`,
    fonts: `${srcDir}/fonts/**/*`,
    fonts_dest: `${srcDir}/fonts/`,
    fonts_ttf: `${srcDir}/fonts/**/*.ttf`,
    fonts_woff: `${srcDir}/fonts/**/*.woff`,
    fonts_woff2: `${srcDir}/fonts/**/*.woff2`,
    page_blocks: `${srcDir}/__page/blocks`,
  },
  watch: {
    //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: `${srcDir}/**/*.html`,
    json: `${srcDir}/**/*.json`,
    // js: `${srcDir}/js/**/*.js`,
    js: `${srcDir}/**/*.js`,
    js_components: `${srcDir}/__page/**/*.js`,
    not_minjs: `!${srcDir}/js/*.min.js`,
    sass: `${srcDir}/sass/**/*.sass`,
    // scss: `${srcDir}/scss/**/*.scss`,
    scss: `${srcDir}/**/*.scss`,
    scss_components: `${srcDir}/__page/**/*.scss`,
    css: `${srcDir}/css/**/*`,
    img: `${srcDir}/img/**/*`,
    fonts: `${srcDir}/fonts/**/*`,
    fonts_ttf: `${srcDir}/fonts/**/*.ttf`,
  },
  clean_src: srcDir,
  clean_build: destDir,
};

function getDirName(str) {
  return fs.readdirSync(process.cwd()).find((element) => element.includes(str));
}
