"use strict";

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
