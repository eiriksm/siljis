var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './js/js.js',
  output: {
    filename: 'assets/bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Kitchen organizing girl',
    filename: './main.html',
    hash: true,
    template: 'src/main.ejs'
  })]
}
