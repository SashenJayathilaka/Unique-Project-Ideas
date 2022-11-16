module.exports.validateRegisterInput = (
  username,
  email,
  password,
  conformPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not br Empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be Empty";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email Must be a Valid Email Address";
    }
  }
  if (password === "") {
    errors.password = "Password must not Empty";
  } else if (password !== conformPassword) {
    errors.conformPassword = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
