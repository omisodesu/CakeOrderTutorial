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

  // メニューの開閉
  navToggle.addEventListener('click', (e) => {
      e.stopPropagation();  // イベントの伝播を止める
      nav.classList.toggle('opened');
  });

  // メニューの外側をクリックした時に閉じる
  document.addEventListener('click', (e) => {
      if (nav.classList.contains('opened') && !nav.contains(e.target)) {
          nav.classList.remove('opened');
      }
  });

  // メニュー項目をクリックした時に閉じる
  const menuItems = document.querySelectorAll('.nav-list a');
  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          nav.classList.remove('opened');
      });
  });
});