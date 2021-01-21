var path = require('path')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: [ './client/src/main.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [ path.resolve(__dirname, '..', 'src') ]
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        include: [path.resolve(__dirname, '..', 'src')]
      }
    ]
  }
}
