var path = require('path');
var config = require('./config');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react/lib/ReactDom.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:{
    'app':[
      path.resolve(__dirname, 'src/js/index.js')
    ]
  },
  //resolve: {
  //  alias: {
  //    'reactts': pathToReact,
  //    'reactDOMts': pathToReactDom
  //  }
  //},
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: config.static_path + ':' + config.static_port + '/public',
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?minimize')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader')
      }
      //{
      //  test: /\.(png|jpg)$/,
      //  loader: 'url?limit=250000'
      //}
    ]
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/[name].css")
  ]
};
