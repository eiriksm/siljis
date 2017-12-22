var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './js/js.js',
  output: {
    filename: 'assets/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kitchen organizing girl',
      filename: './index.html',
      hash: true,
      template: 'src/main.ejs'
    }),
    new ExtractTextPlugin('assets/bundle.css')
  ]
}
