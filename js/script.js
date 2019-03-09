//Greeting Message
let today = new Date();
let hourNow = today.getHours();
let currentYear = today.getFullYear();
let greetingText = document.getElementById('greetingText');
let footerText = document.getElementById('footerText');

footerText.innerText = 'Made with love by John Hennessy | \u00A9 2018-' + currentYear;

if (hourNow > 18) {
  greetingText.innerText = 'Good Evening!';
}
else if (hourNow > 12) {
  greetingText.innerText = 'Good Afternoon!';
}
else if (hourNow > 0) {
  greetingText.innerText = 'Good Morning!';
}
else {
  greetingText.innerText = 'Welcome!';
}



// Slick Slider Functionality
$(document).ready(function() {
  $('.myslider').slick({
    autoplay: true,
    dots: true,
    cssEase: 'ease-out',
    speed: 4000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
  });
});

// jQuery function
  $('.popover-dismiss').popover({
  trigger: 'focus'
});

// Navbar stick function
window.onscroll = function() {myFunction();};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
