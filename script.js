window.addEventListener('load', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  const texts = document.querySelectorAll('.parallax-text');
  const image4_2 = document.querySelector('.img4-center-right');
  const image2_2 = document.querySelector('.img22-img'); 

  sections[0].classList.add('visible');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = e.target.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          sections.forEach(section => section.classList.remove('visible'));
          targetSection.classList.add('visible');
      });
  });

  const images = document.querySelectorAll('.parallax-image');
  images.forEach(image => {
      image.addEventListener('mouseenter', () => {
          image.style.transition = 'transform 0.5s ease';
          image.style.transform = 'scale(1.5)';
      });
      image.addEventListener('mouseleave', () => {
          image.style.transition = 'transform 0.5s ease';
          image.style.transform = 'scale(1)';
      });
  });

  let lastX = 0, lastY = 0;
  document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const xOffset = clientX - window.innerWidth / 2;
      const yOffset = clientY - window.innerHeight / 2;

      const moveX = (xOffset - lastX) * 0.1;
      const moveY = (yOffset - lastY) * 0.1;

      lastX = xOffset;
      lastY = yOffset;

      texts.forEach(text => {
          const speed = text.getAttribute('data-speed');
          const x = moveX * speed / 3;
          const y = moveY * speed / 3;
          text.style.transform = `translate(${x}px, ${y}px)`;
      });

      const speed4_2 = parseFloat(image4_2.getAttribute('data-speed')) || 3.5;
      image4_2.style.transform = `translate(${moveX * speed4_2 / 3}px, ${moveY * speed4_2 / 3}px)`;

      const speed2_2 = parseFloat(image2_2.getAttribute('data-speed')) || 3; 
      image2_2.style.transform = `translate(${moveX * speed2_2 / 3}px, ${moveY * speed2_2 / 3}px)`;
  });

  window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;

      const speed4_2 = parseFloat(image4_2.parentElement.getAttribute('data-speed'));
      const translateY4_2 = scrollTop * speed4_2;
      image4_2.style.transform = `translateY(${translateY4_2}px)`;

      const speed2_2 = parseFloat(image2_2.parentElement.getAttribute('data-speed')); 
      const translateY2_2 = scrollTop * speed2_2;
      image2_2.style.transform = `translateY(${translateY2_2}px)`;
  });

  const hoverImages = [
      { original: '.img32-img', hover: '.img32-hover' },
      { original: '.img33-img', hover: '.img33-hover' },
      { original: '.img34-img', hover: '.img34-hover' },
  ];

  hoverImages.forEach(({ original, hover }) => {
      const originalImage = document.querySelector(original);
      const hoverImage = document.querySelector(hover);

      if (originalImage && hoverImage) {
          setInterval(() => {
              if (originalImage.style.opacity === '0') {
                  hoverImage.style.opacity = '0'; 
                  originalImage.style.opacity = '1';
              } else {
                  hoverImage.style.opacity = '1';
                  originalImage.style.opacity = '0'; 
              }
          }, 3000); 
      }
  });
});