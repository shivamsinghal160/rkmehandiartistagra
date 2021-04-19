
// For Sending Mail of Contact Us Page

const scriptURL = 'https://script.google.com/macros/s/AKfycbzzx3h9W46zFbRjJaXGmqQZCr3CNHssnrBOnGLax8qk7hTDq4aJ/exec'
const form = document.forms['form']

form.addEventListener('submit', e => {
    e.preventDefault()
    alert("Thanks for Contacting us...! We Will Contact You Shortly...");
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("For More Details!!! You Can Also Mail Us On Our Official Mail Id:- rkmehendiartistagra@gmail.com !!!"))
        .catch(error => console.error('Error!', error.message))
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
        rightnav.style.transform = 'translateY(-10px)';

        
    } else {
        navbar.style.height = '100px';
        navbar.style.background = 'linear-gradient(rgb(255, 255, 255),rgba(255, 255, 255,0.0))';
        rightnav.style.display = 'none';
        rightnav.style.transform = 'translateY(-50px)';
    }
})

