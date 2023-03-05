
'use strict';

const form = document.querySelector("form");
const nameInput = document.querySelector('input[type="text"]');
const phoneInput = document.querySelector('input[type="tel"]');
const emailInput = document.querySelector('input[type="email"]');
const addressInput = document.querySelector('input[type="text"]');
const messageInput = document.querySelector("textarea");

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name === "" && name === number) {
    alert("Please enter your name");
    nameInput.focus();
    return false;
  }
  
  if (phone === "") {
    alert("Please enter your phone number");
    phoneInput.focus();
    return false;
  }
  
  if (!/^\+1 \d{3} \d{3} \d{4}$/.test(phone)) {
    alert("Please enter a valid US phone number");
    phoneInput.focus();
    return false;
  }
  
  if (email === "") {
    alert("Please enter your email");
    emailInput.focus();
    return false;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return false;
  }
  
  if (address === "") {
    alert("Please enter your address");
    addressInput.focus();
    return false;
  }
  
  if (message === "") {
    alert("Please enter your message");
    messageInput.focus();
    return false;
  }
  
  alert("Your message has been sent!");
  form.reset();
});


const mediaRun = new IntersectionObserver((views) => {
  views.forEach((view) => {
    if (view.isIntersecting) {
      view.target.classList.add("show");
    } else {
      view.target.classList.remove("show");
    }
  });
});

const mediaElements1 = document.querySelectorAll(".page3-box");
mediaElements1.forEach((e) => mediaRun.observe(e));

const mediaElements2 = document.querySelectorAll(".page3-box-1");
mediaElements2.forEach((e) => mediaRun.observe(e));

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("text");
  const emailInput = document.getElementById("email");
  const numberInput = document.getElementById("number");

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const numberValue = numberInput.value.trim();

  if (nameValue === "") {
    alert("Name is required.");
    event.preventDefault();
  } else if (!isValidName(nameValue)) {
    alert("Please enter full name.");
    event.preventDefault();
  }

  if (emailValue === "") {
    alert("Email is required.");
    event.preventDefault();
  } else if (!isValidEmail(emailValue)) {
    alert("Email is invalid.");
    event.preventDefault();
  }

  if (numberValue === "") {
    alert("Mobile Number is required.");
    event.preventDefault();
  } else if (!isValidMobileNumber(numberValue)) {
    alert("Number is invalid.");
    event.preventDefault();
  }
});

function isValidEmail(email) {
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
}

function isValidName(text) {
  const nameCheck = /^[a-zA-Z ]{2,30}$/;
  return nameCheck.test(text);
}

function isValidMobileNumber(mobileNumber) {
  const mobileCheck =
    /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return mobileCheck.test(mobileNumber);
}
