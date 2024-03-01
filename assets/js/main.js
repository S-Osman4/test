(function () {

  /*=====================================
  Sticky
  ======================================= */
  window.onscroll = function () {
      var header_navbar = document.querySelector(".navbar-area");
      var sticky = header_navbar.offsetTop;

      if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
      } else {
          header_navbar.classList.remove("sticky");
      }



      // show or hide the back-top-top button
      var backToTo = document.querySelector(".scroll-top");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTo.style.display = "flex";
      } else {
          backToTo.style.display = "none";
      }
  };

  // section menu active
function onScroll(event) {
  var sections = document.querySelectorAll('.page-scroll');
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  for (var i = 0; i < sections.length; i++) {
    var currLink = sections[i];
    var val = currLink.getAttribute('href');
    var refElement = document.querySelector(val);
    var scrollTopMinus = scrollPos + 73;
    if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
      document.querySelector('.page-scroll').classList.remove('active');
      currLink.classList.add('active');
    } else {
      currLink.classList.remove('active');
    }
  }
};

  window.document.addEventListener('scroll', onScroll);
  
  // for menu scroll 
  var pageLink = document.querySelectorAll('.page-scroll');

  pageLink.forEach(elem => {
      elem.addEventListener('click', e => {
          e.preventDefault();
          document.querySelector(elem.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              offsetTop: 1 - 60,
          });
      });
  });

  "use strict";

}) ();



const user_id = "hLbeNTdNXClBMIdCN";

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const subjectError = document.querySelector('#subject-error');
const messageError = document.querySelector('#message-error');

function validateInput(inputElement, errorElement, validationFunction, errorMessage) {
  inputElement.addEventListener("input", function (event) {
    if (validationFunction(inputElement)) {
      errorElement.textContent = '';
    } else {
      errorElement.textContent = errorMessage;
    }
  });
}

function validateName(inputElement) {
  return inputElement.value.trim() !== '';
}

function validateEmail(inputElement) {
  return inputElement.validity.typeMismatch || inputElement.value.trim() !== '';
}

function validatePhone(inputElement) {
  return !inputElement.validity.patternMismatch || /^\d+$/.test(inputElement.value.trim());
}

function validateSubject(inputElement) {
  return inputElement.value.trim() !== '';
}

function validateMessage(inputElement) {
  return inputElement.value.trim() !== '';
}

// Usage
validateInput(name, nameError, validateName, 'Please enter in a valid full name (e.g., John Doe).');
validateInput(email, emailError, validateEmail, 'Please enter in a valid Email (e.g., johndoe@email.com).');
validateInput(phone, phoneError, validatePhone, 'Please enter in a valid Phone Number (e.g., 123-456-7890)');
validateInput(subject, subjectError, validateSubject, 'Please type in a subject.');
validateInput(message, messageError, validateMessage, 'Please type in a message.');

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form-fill");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Use EmailJS to send the email
    sendMail();
  });

  function sendMail() {
    console.log('sendMail function called');
    
    const emailjsTemplateID = 'template_o4bcbhy';
    const emailjsServiceID = 'service_vjp8gye';

    var params = {
      
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,

    };




    emailjs.send(emailjsServiceID, emailjsTemplateID, params)
    .then(response=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";


        console.log('EmailJS success:', response);

        successMessage.textContent = 'Your message was sent successfully. Thank you for reaching out!';
        successMessage.style.display = 'block';

        setTimeout(function() {
          form.reset();
          hideSuccessMessage();
        }, 2000);

      }, function(error) {
        console.error('EmailJS error:', error);

        successMessage.textContent = 'Error sending your message. Please try again later.';
        successMessage.style.color = 'red';
        successMessage.style.display = 'block';
      });

    function hideSuccessMessage() {
      successMessage.textContent = '';
      successMessage.style.display = 'none';
    }
  }
});





