const config = {
    entry: {
        app: path.resolve(__dirname, "./../src/main.js"),
      },
      output: {
        filename: "index.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "",
      },
}

module.exports = config;