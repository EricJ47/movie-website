var swiper = new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".multiple-slide-carousel .swiper-button-next",
      prevEl: ".multiple-slide-carousel .swiper-button-prev",
    },
    breakpoints: {
     1920: {
         slidesPerView: 4,
         spaceBetween: 20
     },
     1028: {
         slidesPerView: 3,
         spaceBetween: 20
     },
     480: {
         slidesPerView: 1,
         spaceBetween: 0
     }
   }
  });