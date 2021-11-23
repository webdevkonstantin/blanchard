const fs = require("fs");
const chalk = require("chalk");
const db = require("./mongodb");
const plugins = require("./plugins");

module.exports = function create_plugins(done) {
  db.getProjectDataByParam("plugins")
    .then((pluginsList) => {
      // создаем и обнуляем файл _plugins-css.html
      fs.writeFile(plugins.cssFilePath, "", () => {});
      // записываем в этот файл сначала link'и для плагинов из node_modules
      plugins.checkPluginsAndWrite(pluginsList.css.node_modules, "css", "node_modules");
      return pluginsList;
    })
    .then((pluginsList) => {
      // затем записываем в файл link'и для плагинов с помощью ссылок на cdn ресурс
      plugins.checkPluginsAndWrite(pluginsList.css.cdn, "css", "cdn");
      return pluginsList;
    })
    .then((pluginsList) => {
      // создаем и обнуляем файл _plugins-js.html
      fs.writeFile(plugins.jsFilePath, "", () => {});
      // записываем в этот файл сначала script'ы для плагинов из node_modules
      plugins.checkPluginsAndWrite(pluginsList.js.node_modules, "js", "node_modules");
      return pluginsList;
    })
    .then((pluginsList) => {
      // затем записываем в файл script'ы для плагинов с помощью ссылок на cdn ресурс
      plugins.checkPluginsAndWrite(pluginsList.js.cdn, "js", "cdn");
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(console.log(chalk.red.underline.bold(err)));
    });
};
