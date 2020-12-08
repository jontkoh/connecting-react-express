const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const path = require("path");

const port = process.env.PORT || 8080;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },
};