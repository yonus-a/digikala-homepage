// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, A11y, Autoplay } from "swiper";

var swiper = new Swiper(".hero-swiper .swiper", {
  // Optional parameters
  a11y: true,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
  },

  // modules
  modules: [Navigation, A11y, Pagination, Autoplay],

  // Navigation arrows
  navigation: {
    nextEl: ".hero-swiper .swiper-next",
    prevEl: ".hero-swiper .swiper-prev",
  },

  // pagination
  pagination: {
    el: ".hero-swiper .swiper-pagination",
  },
});
