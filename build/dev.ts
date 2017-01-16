const merge = require('webpack-merge')
import { resolve } from 'path'

import { baseConfig } from './base'

export const devConfig = merge(baseConfig, {
  output: {
    pathinfo: true
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: [
          'file-loader',
          'extract-loader',
          'html-loader',
        ],
        exclude: [
          /node_modules/,
          resolve(__dirname, '../src/index.html')
        ],
      },
      {
        test: /\.(gif|jpg|jpeg|png)/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
    ]
  }
})
