const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const config = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./../src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash].js",

    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: "babel-loader" },
      },
      //   { test: /\.css/, use: ["style-loader", "css-loader"] },
      { test: /\.vue$/, loader: "vue-loader" },
      //   { test: /\.css/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(sa|sc|c)ss/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5 * 1024, // 把小于5KB的文件转成Base64格式
              outputPath: "images/",
              name: "[name]-[hash:4].[ext]",
            },
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
    port: 1100,
  },
  resolve: {
    extensions: [".js", "vue", "json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Title Name",
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(), //热模块替换开启
    new VueLoaderPlugin(), //vue-loader插件开启
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      //   chunkFilename: "css/[id].[hash].css",
    }),
  ],
};

module.exports = config;
