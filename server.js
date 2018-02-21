const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.dev.config");
const compiler = webpack(config);
const indexRoute = require("./dist/indexRoute").default;

app.set('view engine', 'ejs');
app.set('views', './dist');
app.use(express.static(path.resolve(__dirname, "dist")));

if (process.env.NODE_ENV === "dev") {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
} else {
    console.log("Server side rendering");
    app.use("/", indexRoute);
}

app.listen(3000, () => {
    console.log("App listening on port 3000");
});