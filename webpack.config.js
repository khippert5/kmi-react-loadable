const path = require('path');
const { ReactLoadablePlugin } = require('./webpack');

module.exports = {
  entry: {
    main: './example/client',
  },
  output: {
    path: path.join(__dirname, 'example', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-loadable-16.6': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new ReactLoadablePlugin({
      filename:  path.resolve(__dirname, 'example', 'dist', 'react-loadable.json'),
    }),
  ]
};
