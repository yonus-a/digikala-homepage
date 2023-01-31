import Swiper, { Navigation, A11y } from "swiper";

const suggestion_swiper = new Swiper(".random-products .swiper", {
  // Optional parameters
  a11y: true,
  slidesPerView: "auto",
  spaceBetween: 2,
  loop: false,

  // modules
  modules: [Navigation, A11y],

  // Navigation arrows
  navigation: {
    nextEl: ".random-products .swiper-next",
    prevEl: ".random-products .swiper-prev",
  },
});
