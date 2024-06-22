let password = "A98#++a";

console.log("password :" + password);

function passtest(password) {
  if (password.length >= 6) {
    if (/[A-Z]/.test(password)) {
      if (/[a-z]/.test(password)) {
        if (/[!@#$%^&*()\-+]/.test(password)) { // Added \- to include hyphen
          if (/[0-9]/.test(password)) {
            return console.log("password successfully saved");
          } else {
            return console.log("one letter must be a digit, THE PASSWORD IS NOT STRONG!");
          }
        } else {
          return console.log("one letter must be a symbol, THE PASSWORD IS NOT STRONG!");
        }
      } else {
        return console.log("one letter must be lowercase, THE PASSWORD IS NOT STRONG!");
      }
    } else {
      return console.log("one letter must be uppercase, THE PASSWORD IS NOT STRONG!");
    }
  } else {
    return console.log("password must be equal or greater than 6 characters, THE PASSWORD IS NOT STRONG!");
  }
}

passtest(password);
