const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'styles.css',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [

            { loader: 'postcss-loader',
              options: {
            }
          }          
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync('*.html'),
      verbose: true,
      minimize: false
    })
  ]
}
