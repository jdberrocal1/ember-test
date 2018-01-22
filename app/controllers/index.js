import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goSettings() {
      this.transitionToRoute('/settings');
    },
    goReports() {
      this.transitionToRoute('/');
    }
  }
});
