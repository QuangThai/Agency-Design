var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("testimonial__image");
   let dots = document.getElementsByClassName("testimonial__dots-one");
   if (n > slides.length) { slideIndex = 1 }
   if (n < 1) { slideIndex = slides.length }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" testimonial__dots-one--active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " testimonial__dots-one--active";
}


// function addClass
function addClass(element, className) {
   const currentClassName = element.getAttribute("class");
   if (typeof currentClassName !== "undefined" && currentClassName) {
      element.setAttribute("class", currentClassName + " " + className);
   }
   else {
      element.setAttribute("class", className);
   }
}
// function removeClass
function removeClass(element, className) {
   var currentClassName = element.getAttribute("class");
   if (typeof currentClassName !== "undefined" && currentClassName) {
      var class2RemoveIndex = currentClassName.indexOf(className);
      if (class2RemoveIndex !== -1) {
         var class2Remove = currentClassName.substr(class2RemoveIndex, className.length);
         var updatedClassName = currentClassName.replace(class2Remove, "").trim();
         element.setAttribute("class", updatedClassName);
      }
   }
   else {
      element.removeAttribute("class");
   }
}

document.addEventListener("DOMContentLoaded", function () {
   const mobileOpen = document.querySelector('.navbar__mobile-wrapper');
   const overlay = document.querySelector('.navbar__overlay');
   const mobileClose = document.querySelector('.mobile__author-close');
   const iconBars = document.querySelector('.nav__mobile-icon');
   const backTop = document.querySelector('.back-to-top');
   const dots = document.querySelectorAll(".testimonial__image");
   const popup = document.querySelector(".testimonial__detail");
   const popupClose = document.querySelector('.testimonial__detail-close');
   const popupOverlay = document.querySelector('.testimonial__overlay');

   // back-to-top
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

   // reponsive mobile
   iconBars.addEventListener('click', () => {
      if (!mobileOpen.classList.contains('is--open')) {
         addClass(mobileOpen, 'is--open');
         addClass(overlay, 'is--open-overlay');
      }
      else removeClass(mobileOpen, 'is--open')
   });

   mobileClose.addEventListener('click', () => {
      removeClass(mobileOpen, 'is--open');
      removeClass(overlay, 'is--open-overlay');
   });

   overlay.addEventListener('click', () => {
      removeClass(mobileOpen, 'is--open');
      removeClass(overlay, 'is--open-overlay');
   });

   // slider
   for (let dot of [...dots]) {
      dot.addEventListener('click', () => {
         addClass(popup, 'testimonial__detail--active');
         addClass(popupOverlay, 'testimonial__overlay--active');
      });
   }

   // popup slider
   popupClose.addEventListener('click', () => {
      removeClass(popup, 'testimonial__detail--active');
      removeClass(popupOverlay, 'testimonial__overlay--active');
   });

   popupOverlay.addEventListener('click', () => {
      removeClass(popup, 'testimonial__detail--active');
      removeClass(popupOverlay, 'testimonial__overlay--active');
   });

}, false);


