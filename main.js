const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMsg').textContent = "Thank you! Your message has been sent.";
    contactForm.reset();
  });
}

// Simple hero scroll effect
const hero = document.querySelector('.hero');
if(hero){
  window.addEventListener('scroll', () => {
    hero.style.opacity = 1 - window.scrollY / 500;
  });
}