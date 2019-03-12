
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
}