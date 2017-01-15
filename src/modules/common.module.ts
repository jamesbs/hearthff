import { module } from 'angular'
import { BasicModule } from './basic.module'

export const CommonModule = module('app.common', [
    BasicModule,
  ])
  .name
