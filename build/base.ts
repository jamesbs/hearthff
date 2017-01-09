const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
import * as paths from './paths'

export const baseConfig = {
  context: paths.source,

  entry: './index.ts',

  output: {
    filename: 'app.js',
    publicPath: '/',
  },

  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader',
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    })
  ]
}
