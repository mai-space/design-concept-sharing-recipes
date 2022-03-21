const path = require("path");
const { merge } = require('webpack-merge');

const common = require("./webpack.common");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "JavaScripts/[name]-[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/design-concept-sharing-recipies/"
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});