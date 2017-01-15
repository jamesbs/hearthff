const merge = require('webpack-merge')

import { baseConfig } from './base'
import * as paths from './paths'

export const prodConfig = merge(baseConfig, {
  output: {
    path: paths.dist,
  },

  module: {
    loaders: [
      {
        test: /\.(gif|jpg|jpeg|png)/,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 1,
              interlaced: true,
            }
          }
        ],
        exclude: /node_modules/
      },
    ]
  }
})
