
// For Sending Mail of Contact Us Page

let alerts = document.querySelector('.alert')
function resetForm() {
    document.contact-form.reset();
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzzx3h9W46zFbRjJaXGmqQZCr3CNHssnrBOnGLax8qk7hTDq4aJ/exec'
const form = document.forms['form']

form.addEventListener('submit', e => {
    e.preventDefault()
    alerts.style.display = 'block';
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('message send Successfully'))
    .catch(error => console.error('Error!', error.message))
    .then(resetForm())
})


// For Navbar Hamburger

let burger = document.querySelector('.hamburger')
let navbar = document.querySelector('.navbar')
let rightnav = document.querySelector('.right-nav')

burger.addEventListener('click', () => {
    if (rightnav.style.display != 'block') {
        navbar.style.background = 'white';
        navbar.style.height = '400px';
        rightnav.style.display = 'block';
    } else {
        navbar.style.height = '100px';
        navbar.style.background = 'linear-gradient(rgb(255, 255, 255),rgba(255, 255, 255,0.0))';
        rightnav.style.display = 'none';
    }
})

