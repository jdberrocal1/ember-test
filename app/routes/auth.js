import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition: function (transition) {
      let isAuthenticated = localStorage.getItem('ember-test-app-is-user-authenticated');
      isAuthenticated = isAuthenticated === 'true';
      if (isAuthenticated && transition.targetName.match('auth')) {
        this.transitionTo('/');
      } else if(!isAuthenticated && !transition.targetName.match('auth') && this.get('routeName').match('auth')) {
        transition.abort();
      } else {
        return true;
      }
    }
  }
});
