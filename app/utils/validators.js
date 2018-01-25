const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function fieldValidator (isEmailField, value) {
  let regex = isEmailField ? emailRegex : nameRegex;
  let maxLength = isEmailField ? 50 : 25;

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

export default {
  fieldValidator
};
