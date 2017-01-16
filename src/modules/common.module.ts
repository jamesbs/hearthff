import { module } from 'angular'

import { HomeModule } from '../home'
import { BasicModule } from './basic.module'

export const CommonModule = module('app.common', [
    HomeModule,
    BasicModule,
  ])
  .name
