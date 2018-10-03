const fs = require("fs");
const gracefulFs = require("graceful-fs");
gracefulFs.gracefulify(fs);
const DefinePlugin = require("webpack").DefinePlugin;
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== "production";
console.log(path.join(__dirname, "public", "build"));

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.tsx")
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
    filename: "build/bundle.js"
  },
  externals: {
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss"],
    alias: {
      components: path.resolve(__dirname, "src/components/")
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader?useCache=true"
      },
      {
        test: /\.s?css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              data: '@import "mixins";',
              includePaths: [path.resolve(__dirname, "./src/styles")]
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader"
      }
    ]
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE === "true" ? "server" : "disabled"
    }),
    new HardSourceWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new Dotenv({
      path: process.env.PORTAL_ENV_FILE || "./.env"
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "public/index.html"),
      template: path.resolve(__dirname, "templates/index.ejs"),
      inject: true,
      includeAnalytics: process.env.NODE_ENV
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/",
    host: "0.0.0.0",
    hot: true,
    port: process.env.DEV_PORT || "3000",
    historyApiFallback: true
  }
};
