const { src, dest } = require("gulp");
const fs = require("fs");
const chalk = require("chalk");
const path = require("./path");
const db = require("./mongodb");
const allFontsDir = `D:/@2_dev_fonts`;

const fontsScssFile = `${path.srcDir}/scss/global/_fonts.scss`;
const fontWeights = {
  thin: 100,
  thinitalic: 100,
  extralight: 200,
  extralightitalic: 200,
  ultralight: 200,
  ultralightitalic: 200,
  light: 300,
  lightitalic: 300,
  italic: 400,
  regular: 400,
  normal: 400,
  medium: 500,
  mediumitalic: 500,
  demibold: 600,
  demibolditalic: 600,
  semibold: 600,
  semibolditalic: 600,
  bold: 700,
  bolditalic: 700,
  extrabold: 800,
  extrabolditalic: 800,
  heavy: 900,
  heavyitalic: 900,
  black: 900,
  blackitalic: 900,
};

module.exports = function create_fonts(done) {
  let fonts = [];

  db.getProjectDataByParam("fonts")
    // из массива шрифтов из документа (таблицы) проекта
    // создаем массив объектов для этих же шрифтов с весом, семейством и стилем
    .then((fontsList) => {
      if (fontsList.length > 0) {
        fontsList.forEach((fontName, i) => {
          if (fontName.indexOf("-")) {
            let fontFamily = getFontFamily(fontName);
            let fontWeight = fontWeights[getFontWeightName(fontName)];
            let fontStyle = "normal";

            if (fontIsItalic(fontName)) fontStyle = "italic";

            fonts.push({
              fontname: fontName,
              fontfamily: fontFamily,
              fontweight: fontWeight,
              fontstyle: fontStyle,
            });
          }
        });
      } else {
        done();
      }
    })
    // сортируем шрифты по их весу (fontweight)
    .then(() => {
      fonts.sort(function (a, b) {
        if (a.fontweight > b.fontweight) {
          return 1;
        }
        if (a.fontweight < b.fontweight) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
    })
    // для каждого шрифта добавляем файл формата .ttf из общей папки со шрифтами
    // и прописываем для него миксин в файле _fonts.scss
    .then(() => {
      fonts.forEach((font, i) => {
        const fontPath = allFontsDir + "/" + font.fontfamily;
        let fontFiles = fs.readdirSync(fontPath);
        const fontFileName = font.fontname + ".ttf";
        const fullFontFilePath = fontPath + "/" + fontFileName;

        // копируем шрифты из папки fontPath в папку app/fonts
        // и создаем файл _fonts.scss с миксином шрифта
        if (fontFiles.includes(fontFileName)) {
          addFontToSrc(fullFontFilePath);
          writeMixinToFonts(fontsScssFile, font);
        }
      });
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(console.log(err));
    });
};

function getFontFamily(fontName) {
  return fontName.split("-")[0];
}

function getFontWeightName(fontName) {
  return fontName.split("-")[1].toLowerCase();
}

function fontIsItalic(fontName) {
  return getFontWeightName(fontName).includes("italic") ? true : false;
}

function addFontToSrc(fullFilePath) {
  src(fullFilePath).pipe(dest(path.src.fonts_dest));
  console.log(
    chalk.yellow.bold(
      `Font ${chalk.magenta.underline.bold(
        fullFilePath
      )} successfully loaded to ${chalk.magenta.underline.bold(path.src.fonts_dest)} `
    )
  );
}

function writeMixinToFonts(path, font) {
  try {
    fs.writeFileSync(
      path,
      `@include font-face("${font.fontfamily}", "${font.fontname}", ${font.fontweight}, ${font.fontstyle});\r\n`,
      { flag: "a+" }
    ); //'a+' is append mode
    console.log(
      chalk.yellow.bold(
        "Font-face mixin for " +
          chalk.magenta.underline.bold(font.fontname) +
          " successfully added to " +
          chalk.magenta.underline.bold(path)
      )
    );
  } catch (err) {
    console.error(err);
  }
}
