document.addEventListener("DOMContentLoaded", function () {
   const mobileOpen = document.querySelector('.navbar__mobile-wrapper');
   const overlay = document.querySelector('.navbar__overlay');
   const mobileClose = document.querySelector('.mobile__author-close');
   const iconBars = document.querySelector('.nav__mobile-icon');
   const backTop = document.querySelector('.back-to-top');

   window.onscroll = function () {
      if (window.scrollY > 300) {
         backTop.style.display = 'block';
      } else {
         backTop.style.display = 'none';
      }

      const handleScrollTop = () => {
         if (window.scrollY > 0) {
            setTimeout(function () {
               window.scrollTo(0, window.scrollY - 5)
               handleScrollTop();
            }, 300)
         }
      }
      backTop.addEventListener('click', handleScrollTop);
   }

   iconBars.addEventListener('click', () => {
      if (!mobileOpen.classList.contains('is--open')) {
         mobileOpen.classList.add('is--open');
         overlay.classList.add('is--open-overlay');
      }
      else mobileOpen.classList.remove('is--open');
   });

   mobileClose.addEventListener('click', () => {
      mobileOpen.classList.remove('is--open');
      overlay.classList.remove('is--open-overlay');
   });

   overlay.addEventListener('click', () => {
      mobileOpen.classList.remove('is--open');
      overlay.classList.remove('is--open-overlay');
   });
}, false)

