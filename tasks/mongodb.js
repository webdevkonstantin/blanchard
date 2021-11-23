const chalk = require("chalk");
const MongoClient = require("mongodb").MongoClient;
var _ = require("lodash");
// const path = require("./path.js");
const globalPath = require("path");

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

const projectName = globalPath.basename(globalPath.dirname(__dirname));

// var srcDirs = [
//   { name: `${path.srcDir}/components/page-blocks` },
//   { name: `${path.srcDir}/fonts` },
//   { name: `${path.srcDir}/img` },
//   { name: `${path.srcDir}/js` },
//   { name: `${path.srcDir}/scss/base` },
//   { name: `${path.srcDir}/scss/global` },
// ];

// let project = {
//   name: "blanchard",
//   title: "Blanchard - Художественная Галерея",
//   description: ``,
//   fonts: ["OpenSans-Regular", "OpenSans-Bold", "OpenSans-SemiBold", "OpenSans-Italic"],
//   plugins: {
//     css: {
//       node_modules: [
//         "node_modules/normalize.css/normalize.css",
//         "node_modules/bootstrap/dist/css/bootstrap-grid.min.css",
//       ],
//       cdn: [],
//     },
//     js: {
//       node_modules: [],
//       cdn: [],
//     },
//   },
//   hostDir: "httpdocs/blanchard/",
// };

// let srcFiles = [
//   {
//     name: `${path.srcDir}/components/page-blocks/_head.html`,
//     content: `<head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta name="description" content="@@description" />
//         <meta name="keywords" content="@@keywords" />
//         <link rel="shortcut icon" href="@@favicon.png" type="image/x-icon">
//         @@include('./_plugins-css.html')
//         <link rel="stylesheet" href="css/style.css" />
//         <title>@@title</title>
//       </head>`,
//   },
//   { name: `${path.srcDir}/components/page-blocks/_header.html`, content: "" },
//   { name: `${path.srcDir}/components/page-blocks/_header.scss`, content: "" },
//   { name: `${path.srcDir}/components/page-blocks/_footer.html`, content: "" },
//   { name: `${path.srcDir}/components/page-blocks/_footer.scss`, content: "" },
//   {
//     name: `${path.srcDir}/components/page-blocks/_scripts.html`,
//     content: `@@include('./_plugins-js.html')
//         <script src="js/main.js"></script>`,
//   },
//   {
//     name: `${path.srcDir}/index.html`,
//     content: `
//         <!DOCTYPE html>
//         <html lang="ru">
//         @@include('./components/page-blocks/_head.html', {
//           "title": "Blanchard - Художественная Галерея",
//           "description": "",
//           "keywords": "",
//           "favicon": "img/favicon"
//         })
//         <body>

//           @@include('components/page-blocks/_header.html')
//           <main class="main"></main>
//           @@include('components/page-blocks/_footer.html')
//           @@include('./components/page-blocks/_scripts.html')
//         </body>
//       </html>`,
//   },
//   {
//     name: `${path.srcDir}/plugins.json`,
//     content: `{
//         "css": {
//           "node_modules": [
//             "node_modules/normalize.css/normalize.css",
//             "node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
//           ],
//           "cdn": []
//         },
//         "js": {
//           "node_modules": [],
//           "cdn": []
//         }
//       }`,
//   },
//   { name: `${path.srcDir}/js/main.js`, content: "" },
//   {
//     name: `${path.srcDir}/scss/style.scss`,
//     content: `@import "base/mixins";
//     @import "global/fonts";
//     @import "global/default";
//     @import "global/interface";`,
//   },
//   {
//     name: `${path.srcDir}/scss/base/_mixins.scss`,
//     content: `@mixin font-face($name, $file, $weight: 400, $style: normal) {
//           @font-face {
//             font-family: "#{$name}";
//             src: local("#{$file}"), url("../fonts/#{$file}.woff2") format("woff2"),
//               url("../fonts/#{$file}.woff") format("woff");
//             font-weight: $weight;
//             font-style: $style;
//             font-display: swap;
//           }
//         }

//         @mixin bg($size: "contain", $position: "center") {
//           background-size: #{$size};
//           background-position: #{$position};
//           background-repeat: no-repeat;
//         }`,
//   },
//   {
//     name: `${path.srcDir}/scss/global/_default.scss`,
//     content: `/* Default */
//         html {
//           box-sizing: border-box;
//         }

//         *,
//         *::before,
//         *::after {
//           box-sizing: inherit;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         img {
//           max-width: 100%;
//         }

//         picture {
//           font-size: 0;
//         }

//         body {
//           margin: 0;
//           font-family: "OpenSans", sans-serif;
//           font-weight: 400;
//         }
//         `,
//   },
//   {
//     name: `${path.srcDir}/scss/global/_interface.scss`,
//     content: `/* Interface */`,
//   },
// ];

// getCollection is defined inside the module so we can call it wherever we want

async function getCollection(name) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("dev");
    const collection = db.collection(name);
    const results = await collection.find().toArray();

    return results;
  } catch (err) {
    console.log(chalk.red.underline.bold(err));
  } finally {
    await mongoClient.close();
  }
}

async function insertCollection(name, data) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("dev");
    const collection = db.collection(name);
    const results = await collection.insertMany(data);
    // const result = await collection.insertOne(data);

    console.log("result: ", results);
  } catch (err) {
    console.log(chalk.red.underline.bold(err));
  } finally {
    await mongoClient.close();
  }
}
// insertCollection("srcDirs", srcDirs);

async function updateDocument(collection, name, data) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("dev");
    const collect = db.collection(collection);
    const result = await collect.findOneAndUpdate(
      { name: name },
      { $set: data },
      { returnDocument: "after" }
    );
    console.log(result);
  } catch (err) {
    console.log(chalk.red.underline.bold(err));
  } finally {
    await mongoClient.close();
  }
}
// updateDocument("_projects", "blanchard", { fontFamily: "OpenSans" });
// updateDocument("_ftp_settings", "blanchard", { fontFamily: "OpenSans" });

async function getProject() {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("dev");
    const collection = db.collection("_projects");
    const project = await collection.findOne({ name: projectName });

    return project;
  } catch (err) {
    console.log(chalk.red.underline.bold(err));
  } finally {
    await mongoClient.close();
  }
}
// getProject();

async function getProjectDataByParam(param) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("dev");
    const collection = db.collection("_projects");
    const project = await collection.findOne({ name: projectName });
    const result = _.has(project, param) ? _.get(project, param) : project[param];

    return result;
  } catch (err) {
    console.log(chalk.red.underline.bold(err));
  } finally {
    await mongoClient.close();
  }
}
// getProjectDataByParam("fonts")
// getProjectDataByParam("plugins");

// Export it to make it available outside
module.exports.projectName = projectName;
module.exports.getCollection = getCollection;
module.exports.insertCollection = insertCollection;
module.exports.updateDocument = updateDocument;
module.exports.getProject = getProject;
module.exports.getProjectDataByParam = getProjectDataByParam;
