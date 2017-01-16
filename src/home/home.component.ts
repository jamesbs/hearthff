import { StateService } from 'angular-ui-router'

export const HomeComponent = {
  templateUrl: require('./home.component.html'),
  controller: class HomeComponent {
    constructor(private $state: StateService) { }

    start() {
      console.log('start fired!')
      this.$state.go('battle-tag')
    }
  }
}
