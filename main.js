const scriptURL = 'https://script.google.com/macros/s/AKfycbwhEKxFGlyKgP4xvr6VbLSmiz4ECbgacM29PiIWBwjnfphW3AgAYpuzP3F63QPKlvPn/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})