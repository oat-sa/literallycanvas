const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    literallycanvas: "./src/index.coffee",
    "literallycanvas-core": "./src/index.coffee",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "lib/js"),
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "coffee-loader",
            options: {
              bare: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".coffee"],
    alias: {
      "@core": path.resolve(__dirname, "node_modules/literallycanvas-core/src"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.INCLUDE_GUI': JSON.stringify(true),
    }),
  ],
  devtool: "source-map",
  devServer: {
    port: 35728,
    open: true,
    static: [
      {
        directory: path.join(__dirname, "/"),
      },
    ],
  }
};
