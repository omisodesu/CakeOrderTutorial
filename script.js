document.addEventListener('DOMContentLoaded', function(){
  // アコーディオン動作
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
      header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          const isOpen = content.style.display === 'block';
          if(isOpen) {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });

  // ハンバーガーメニュー動作
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.nav-overlay');

  navToggle.addEventListener('click', () => {
      const opened = nav.classList.contains('opened');
      if (!opened) {
          nav.classList.add('opened');
          overlay.classList.add('active');
      } else {
          nav.classList.remove('opened');
          overlay.classList.remove('active');
      }
  });

  overlay.addEventListener('click', () => {
      nav.classList.remove('opened');
      overlay.classList.remove('active');
  });
});