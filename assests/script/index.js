const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const phoneInput = document.querySelector('input[type="tel"]');
const emailInput = document.querySelector('input[type="email"]');
const addressInput = document.querySelector('input[type="text"]');
const messageInput = document.querySelector('textarea');
let number= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' && name === number) {
    alert('Please enter your name');
    nameInput.focus();
    return false;
  }

  if (phone === '') {
    alert('Please enter your phone number');
    phoneInput.focus();
    return false;
  }

  if (!/^\+1 \d{3} \d{3} \d{4}$/.test(phone)) {
    alert('Please enter a valid US phone number');
    phoneInput.focus();
    return false;
  }

  if (email === '') {
    alert('Please enter your email');
    emailInput.focus();
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address');
    emailInput.focus();
    return false;
  }

  if (address === '') {
    alert('Please enter your address');
    addressInput.focus();
    return false;
  }

  if (message === '') {
    alert('Please enter your message');
    messageInput.focus();
    return false;
  }

  alert('Your message has been sent!');
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

const mediaElements = document.querySelectorAll(".page3-box");
mediaElements.forEach((e) => mediaRun.observe(e));
