import * as merge from 'webpack-merge'

import { baseConfig } from './base'

export const devConfig = merge(baseConfig, {
  output: {
    pathinfo: true
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(gif|jpg|jpeg|png)/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
    ]
  }
})
