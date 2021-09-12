export default function validateInfo(person) {
  let errors = {};

  if (!person.first_name) {
    errors.first_name = 'first name required';
  }

  // lastName
  if (!person.last_name) {
    errors.last_name = 'last name required';
  }

  // email
  if (!person.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(person.email)) {
    errors.email = 'Email address is invalid';
  }

  // password
  if (!person.password) {
    errors.password = 'Password is Required';
  } else if (person.password.length < 6) {
    errors.password = 'Password needs to be 6 or more ';
  }

  if (!person.password_confirmation) {
    errors.password_confirmation = 'password is required';
  } else if (person.password_confirmation !== person.password) {
    errors.password_confirmation = 'Passwords do not match';
  }
  return errors;
}
