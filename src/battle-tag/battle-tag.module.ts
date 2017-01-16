import { module } from 'angular'
import { StateProvider } from 'angular-ui-router'

import { BattleTagComponent } from './battle-tag.component'

export const BattleTagModule = module('battle-tag', [])
  .component('battleTag', BattleTagComponent)
  .config(($stateProvider: StateProvider, $urlRouterProvider) => {
    $stateProvider.state('battle-tag', {
      url: '/questions/battle-tag',
      component: 'battleTag',
    })
  })
  .name
