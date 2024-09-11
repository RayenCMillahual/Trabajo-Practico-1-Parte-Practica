document.getElementById('inscribete').addEventListener('click', function() {
    alert('Te contactaremos');
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const paragraphs = document.querySelectorAll('.general p');

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('mouseover', () => {
    paragraph.style.color = 'black';
  });

  paragraph.addEventListener('mouseout', () => {
    paragraph.style.color = 'white';
  });
});