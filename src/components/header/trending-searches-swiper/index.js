import Swiper, { Navigation, A11y } from "swiper";

var swiper = new Swiper(".trending-searches-swiper .swiper", {
  // Optional parameters
  a11y: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: false,

  // modules
  modules: [Navigation, A11y],

  // Navigation arrows
  navigation: {
    nextEl: ".trending-searches-swiper .swiper-next",
    prevEl: ".trending-searches-swiper .swiper-prev",
  },
});
