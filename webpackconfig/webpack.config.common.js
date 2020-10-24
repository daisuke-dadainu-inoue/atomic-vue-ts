const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/front/index.ts'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../public/js'),
    chunkFilename: '[id].bundle.js?' + new Date().getTime(),
    publicPath: '/js/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue|ts)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja/),
    new CleanWebpackPlugin(),
    new HardSourceWebpackPlugin(),
  ],
};
