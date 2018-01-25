import Controller from '@ember/controller';
import Validator from '../../utils/validators';

export default Controller.extend({
  firstName: 'Daniel',
  lastName: 'Berrocal',
  email: 'jdanielb1992@gmail.com',
  password: '',
  valueBackup: {},
  isUpdatingName: false,
  isUpdatingEmail: false,
  isUpdatingPassword: false,
  errorMsgs: {},
  fullName: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  actions: {
    showNameForm() {
      this.set('isUpdatingName', true);
      let valueBackup = this.get('valueBackup');
      valueBackup.firstName = this.get('firstName');
      valueBackup.lastName = this.get('lastName');
      this.set('valueBackup', valueBackup);
    },
    updateName() {
      let firstName = this.get('firstName');
      let lastName = this.get('lastName');
      let firstNameValidationResult = Validator.fieldValidator(false, firstName);
      this.set('errorMsgs.firstName', firstNameValidationResult.msg);
      let lastNameValidationResult = Validator.fieldValidator(false, lastName);
      this.set('errorMsgs.lastName', lastNameValidationResult.msg);
      if (firstNameValidationResult.result && lastNameValidationResult.result) {
        this.set('isUpdatingName', false);
      }
    },
    cancelName() {
      let valueBackup = this.get('valueBackup');
      this.set('firstName', valueBackup.firstName);
      this.set('lastName', valueBackup.lastName);
      this.set('errorMsgs.firstName', '');
      this.set('errorMsgs.lastName', '');
      this.set('isUpdatingName', false);
    },
    showEmailForm() {
      this.set('isUpdatingEmail', true);
      let valueBackup = this.get('valueBackup');
      valueBackup.email = this.get('email');
      this.set('valueBackup', valueBackup);
    },
    updateEmail() {
      let email = this.get('email');
      let emailValidationResult = Validator.fieldValidator(true, email);
      this.set('errorMsgs.email', emailValidationResult.msg);
      if (emailValidationResult.result) {
        this.set('isUpdatingEmail', false);
      }
    },
    cancelEmail() {
      let valueBackup = this.get('valueBackup');
      this.set('email', valueBackup.email);
      this.set('errorMsgs.email', '');
      this.set('isUpdatingEmail', false);
    },
    // showPasswordForm() {
    //   this.set('isUpdatingEmail', true);
    //   let valueBackup = this.get('valueBackup');
    //   valueBackup.email = this.get('email');
    //   this.set('valueBackup', valueBackup);
    // },
    // updatePassword() {
    //   let email = this.get('email');
    //   let emailValidationResult = Validator.fieldValidator(true, email);
    //   this.set('errorMsgs.email', emailValidationResult.msg);
    //   if (emailValidationResult.result) {
    //     this.set('isUpdatingEmail', false);
    //   }
    // },
    // cancelPassword() {
    //   let valueBackup = this.get('valueBackup');
    //   this.set('password', valueBackup.password);
    //   // clean error msgs from passwords
    //   this.set('isUpdatingPassword', false);
    // },
  }
});
