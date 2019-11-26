const path = require('path');

module.exports = {
  entry: "./lib/map_viz.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "mainOutput.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env"]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"]
  }
};