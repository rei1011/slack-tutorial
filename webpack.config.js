const debug = process.env.NODE_ENV !== "production";
const MODE = "development";
const enabledSourceMap = MODE === "development";
const webpack = require('webpack');
const path = require('path');
const tmp = "";
const tmp2 = "";
const tmp3 = "";
const tmp4 = "";
const tmp5 = "";
const tmp6 = "";
const tmp7 = "";

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/client.js",
  mode: MODE,
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            'react-html-attrs',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }]
          ],
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            sourceMap: enabledSourceMap,
            importLoaders: 2
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: enabledSourceMap
          }
        }
      ]
    },
    {
      test: /\.(gif|png|jpg|svg)$/,
      include: path.resolve(__dirname, 'src/img'),
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 51200,
            name: './src/img/[name].[ext]'
          }
        }
      ]
  }
  ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
