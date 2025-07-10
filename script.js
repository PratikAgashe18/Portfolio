
document.getElementById('year').textContent = new Date().getFullYear();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
  });
}


const navbar = document.querySelector('.navbar');
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
navToggle.addEventListener('click', () => {
  navbar.querySelector('.nav-links').classList.toggle('active');
});
navbar.querySelector('.container').appendChild(navToggle);

function handleResize() {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);
handleResize();

