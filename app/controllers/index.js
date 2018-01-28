import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goSettings() {
      this.transitionToRoute('/settings');
    },
    goReports() {
      this.transitionToRoute('/');
    },
    logout() {
      localStorage.setItem('ember-test-app-is-user-authenticated', false);
      this.transitionToRoute('/auth');
    }
  }
});
