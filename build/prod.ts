import * as merge from 'webpack-merge'

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
        loader: 'file-loader',
        exclude: /node_modules/
      },
    ]
  }
})
