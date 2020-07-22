const config = {
  plugins: {
    "autoprefixer": {
      overrideBrowserslist: [
        ">1%",
        "last 4 versions",
        "Firefox ESR",
        "Chrome > 31",
        "not ie < 9",
      ],
    },
   /*  "postcss-pxtorem":{
        rootValue:16
    } */
  },
};

module.exports = config;
