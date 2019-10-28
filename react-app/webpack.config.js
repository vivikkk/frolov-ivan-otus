const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    },
    {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'ts-loader'
      }]
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
