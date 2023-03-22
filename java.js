let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var fields = {};

document.addEventListener("DOMContentLoaded", function() {
  fields.fullName = document.getElementById('fullName');
  fields.email = document.getElementById('email');
  fields.phoneNumber = document.getElementById('phoneNumber');
  fields.message = document.getElementById('message');  
  var error_message = document.getElementById('error_message');
})

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  text = "Please fill out all fields";
  confirmation_message.innerHTML = '';
  error_message.innerHTML = text;

  return (value.length > 0);
}

function checkNumber(phoneNumber) {
  var phoneno = /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g;
  if (phoneno.test(phoneNumber))
    {
      return true;
    }
    else
    {
      text = "Please enter valid phone number";
      confirmation_message.innerHTML = '';
      error_message.innerHTML = text;
      return false;
    }
}

function isEmail(email) {
  let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regex.test(String(email).toLowerCase())){
    return true;
  }
  
  else
    {
      text = "Please enter valid Email";
      confirmation_message.innerHTML = '';
      error_message.innerHTML = text;
      return false;
    }
}

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.fullName, isNotEmpty);
  valid &= fieldValidation(fields.phoneNumber, checkNumber);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.message, isNotEmpty);

  return valid;
 }

 class User {
  constructor(fullName, phoneNumber, email, message) 
    {
      this.fullName = fullName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.message = message;
    }
 }

 function sendContact() {
  if (isValid()) {
    error_message.innerHTML = '';
    let usr = new User(fullName.value, phoneNumber.value, email.value, message.value);
    confirmation_message.innerHTML = ('Thanks for sending us a message!'); 
  }

  console.log(fullName.value, email.value, phoneNumber.value, message.value);
 }