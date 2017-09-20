const env = process.env.NODE_ENV
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: env === 'production'
          ? ExtractTextPlugin.extract({
              use: [{
                  loader: "css-loader",
                  options: {
                    sourceMap: true
                  }
              }, {
                  loader: "sass-loader",
                  options: {
                    sourceMap: true
                  }
              }],
              fallback: "style-loader"
            })
          : ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Langlord'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

if (env === 'production') {
  config.plugins.push(new ExtractTextPlugin('application.[hash].css'));
}

module.exports = config
