import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// # Swiper JS - Clients

let clientSwiper = new Swiper(".client-swiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  lazy: true,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});
