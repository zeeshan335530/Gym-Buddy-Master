const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: {
    application: [
      "./app/javascript/application.js",
      "./app/assets/stylesheets/application.bootstrap.scss"
    ]
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "app/assets/builds"),
    publicPath: "/assets/",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, "node_modules")
                ]
              }
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]"
        }
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "webfonts/[name][ext]"
        }
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      "node_modules"
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "application.css"
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
};