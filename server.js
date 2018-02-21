const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, () => {
console.log("App listening on port 3000");
});