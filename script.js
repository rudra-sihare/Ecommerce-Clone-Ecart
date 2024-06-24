const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Send the data to the server
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Thank you for your message!');
      form.reset();
    }
  };
  xhr.send(`name=${name.value}&email=${email.value}&message=${message.value}`);
});
