import './style.css'

console.log('Call of Duty UI Loaded');

// Add some interaction to buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Sound effect could go here
    console.log('Clicked', btn.innerText);
    
    // Add a quick flash effect
    btn.style.filter = 'brightness(1.5)';
    setTimeout(() => {
      btn.style.filter = 'none';
    }, 100);
  });
});

// Dynamic Particles adjustment (optional, if CSS isn't enough)
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const ghost = document.querySelector('.hero-ghost-img');
    if(ghost) {
        ghost.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
});
