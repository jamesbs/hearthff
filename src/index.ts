import { module } from 'angular'
import uiRouter from 'angular-ui-router'

import { AppComponent } from './app.component'
import { CommonModule } from './modules'

import './app.component.css'

export const app = module('app', [
    uiRouter,
    CommonModule,
  ])
  .component('app', AppComponent)
  .name
