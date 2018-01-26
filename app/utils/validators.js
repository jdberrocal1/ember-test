const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const maxLength1 = 25;
const maxLength2 = 50;
const minLength = 8;

function fieldValidator (isEmailField, value) {
  let regex = isEmailField ? emailRegex : nameRegex;
  let maxLength = isEmailField ? maxLength1 : maxLength2;

  if (value.length === 0) {
    return {result: false, msg: 'Required value.'};
  }
  if (value.length > maxLength) {
    return {result: false, msg: `Please enter no more than ${maxLength} characters.`};
  }
  if (!regex.test(value)) {
    return {result: false, msg: 'Invalid value.'};
  } else {
    return {result: true, msg: ''};
  }
}

function passwordValidator (needsConfirmation, value, confirmation) {
  if (value.length === 0) {
    return {result: false, msg: 'Required value.'};
  }
  if (value.length < minLength) {
    return {result: false, msg: `Please enter at least 8 characters.`};
  }
  if (value.length > maxLength1) {
    return {result: false, msg: `Please enter no more than ${maxLength1} characters.`};
  }
  if (needsConfirmation && value !== confirmation) {
    return {result: false, msg: 'Password does not match.'};
  } else {
    return {result: true, msg: ''};
  }
}

export default {
  fieldValidator,
  passwordValidator
};
