var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: function(module, count) {
        return module.resource && module.resource.indexOf(path.join(__dirname, 'node_modules')) === 0;
    }}),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude : /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|png)$/,
        loader: 'file-loader?name=[name].[ext]',
      }
    ]
  }
};
