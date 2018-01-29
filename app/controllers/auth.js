import Controller from '@ember/controller';

export default Controller.extend({
  logingMsg: '',
  actions: {
    login() {
      let credentials = this.getProperties('username', 'password');
      if (credentials.username.toLowerCase() === 'admin' && credentials.password.toLowerCase() === 'admin') {
        localStorage.setItem('ember-test-app-is-user-authenticated', true);
        this.transitionToRoute('/');
        this.set('username', '');
        this.set('password', '');
      } else {
        this.set('password', '');
        this.set('logingMsg', 'Invalid Credentials');
      }
    }
  }
});
