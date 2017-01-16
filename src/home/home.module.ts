import { module } from 'angular'
import uiRouter from 'angular-ui-router'

import { HomeComponent } from './home.component'

export const HomeModule = module('app.home', [
    uiRouter,
  ])
  .component('home', HomeComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('home', {
      url: '/',
      component: 'home'
    })
  })
  .name
