// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const dist = path.join(__dirname, "dist");
const src = path.join(__dirname, "src");
const public_dir = path.join(__dirname, "public");

module.exports = {
  mode: "development",
  context: src,
  entry: "./app/index.ts",
  output: {
    path: dist,
  },
  devServer: {
    static: {
      directory: public_dir,
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
