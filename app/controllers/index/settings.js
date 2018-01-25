import Controller from '@ember/controller';

export default Controller.extend({
  firstName: 'Daniel',
  lastName: 'Berrocal',
  email: 'asd',
  password: '',
  valueBackup: null,
  isUpdatingName: false,
  errorMsgs: null,
  fullName: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  nameValidator(field, value) {
    let regex = /^[a-zA-Z ]+$/;
    let errorMsgs = this.get('errorMsgs');
    let errorMsgsExists = false;

    if(errorMsgs){
      errorMsgsExists = true;
    } else {
      errorMsgs = {};
    }

    if (value.length === 0) {
      let msg = 'Required value.';
      errorMsgsExists ? this.set(`errorMsgs.${field}`, msg) : errorMsgs[field] = msg;
      this.set('errorMsgs', errorMsgs);
      return false;
    }
    if (value.length > 25) {
      let msg = 'Please enter no more than 25 characters.';
      errorMsgsExists ? this.set(`errorMsgs.${field}`, msg) : errorMsgs[field] = msg;
      this.set('errorMsgs', errorMsgs);
      return false;
    }
    if (!regex.test(value)) {
      let msg = 'Invalid value.';
      errorMsgsExists ? this.set(`errorMsgs.${field}`, msg) : errorMsgs[field] = msg;
      this.set('errorMsgs', errorMsgs);
      return false;
    } else {
      let msg = '';
      errorMsgsExists ? this.set(`errorMsgs.${field}`, msg) : errorMsgs[field] = msg;
      this.set('errorMsgs', errorMsgs);
      return true;
    }
  },
  actions: {
    showNameForm() {
      this.set('isUpdatingName', true);
      this.set('valueBackup', { firstName: this.get('firstName'), lastName: this.get('lastName') });
    },
    updateName() {
      let firstName = this.get('firstName');
      let lastName = this.get('lastName');
      if (this.nameValidator('firstName', firstName) && this.nameValidator('lastName', lastName)) {
        this.set('isUpdatingName', false);
      }
    },
    cancelName() {
      let nameInfoBackup = this.get('valueBackup');
      this.set('firstName', nameInfoBackup.firstName);
      this.set('lastName', nameInfoBackup.lastName);
      this.set('isUpdatingName', false);
    },
  }
});
