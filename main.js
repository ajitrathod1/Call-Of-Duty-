import './style.css'
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

console.log('Call of Duty Landing Page Inited');

// Component Injection
document.addEventListener('DOMContentLoaded', () => {
  const navRoot = document.getElementById('navbar-root');
  const footerRoot = document.getElementById('footer-root');

  if (navRoot) navRoot.innerHTML = Navbar();
  if (footerRoot) footerRoot.innerHTML = Footer();
});

// Scroll Animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Trigger once
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll, .reveal-on-load').forEach(el => {
  observer.observe(el);
});

// Parallax Effect for Hero
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  const ghost = document.querySelector('.parallax-target');
  if (ghost) {
    ghost.style.transform = `translate(${x}px, ${y}px)`;
  }
});

