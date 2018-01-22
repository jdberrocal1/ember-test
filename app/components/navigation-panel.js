import Component from '@ember/component';

export default Component.extend({
  isMobileMenuOpen: false, // boolean to handle if mobile menu is open or not
  isSettingsOpen: false, // boolean to set settings navigation option as active
  isReportsOpen: true, // // boolean to set settings navigation option as active
  actions: {
    goSettings() {
      this.set('isMobileMenuOpen', false);
      this.set('isSettingsOpen', true);
      this.set('isReportsOpen', false);
    },
    goReports() {
      this.set('isMobileMenuOpen', false);
      this.set('isSettingsOpen', false);
      this.set('isReportsOpen', true);
    },
    openMobileMenu() {
      if (screen.width < 413) {
        this.set('isMobileMenuOpen', true);
      }
    },
    closeMobileMenu() {
      this.set('isMobileMenuOpen', false );
    },
    logout() {
      this.set('isMobileMenuOpen', false );
    }
  }
});
