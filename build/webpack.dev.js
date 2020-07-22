const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");

const config = merge(baseWebpackConfig,{
    mode: "development",
    devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
    port: 1100,
  },
    devServer: {
        contentBase: "./dist",
        hot: true,
        open: true,
        port: 1100,
        inline:true,
        historyApiFallback:true
      },
});

module.exports = config;
