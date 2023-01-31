import Swiper, { Navigation, A11y, FreeMode } from "swiper";

const suggestion_swiper = new Swiper(".top-brands .swiper", {
  // Optional parameters
  a11y: true,
  slidesPerView: "auto",
  loop: false,
  freeMode: true,
  
  // modules
  modules: [Navigation, A11y, FreeMode],

  // Navigation arrows
  navigation: {
    nextEl: ".top-brands .swiper-next",
    prevEl: ".top-brands .swiper-prev",
  },
});
