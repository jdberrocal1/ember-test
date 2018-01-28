import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    let isAuthenticated = localStorage.getItem('ember-test-app-is-user-authenticated');
    isAuthenticated = isAuthenticated === 'true';
    if (!isAuthenticated) {
      this.transitionTo('/auth');
    }
  },
});
