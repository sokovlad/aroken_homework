const swiper = new Swiper(".hero__slider", {
  spaceBetween: 15,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: true,
  effect: "slide",
  loop: true,

  speed: 1000,

  breakpoints: {
    901: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    701: {
      slidesPerView: 2,
    },
    501: {
      slidesPerView: 1.5,
    },
  },
});

// Аккордеон
const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", (e) => {
  e.preventDefault();
  const accordionItem = e.currentTarget;
  const accordionContent = document.querySelector(".accordion__content-list");
  accordionItem.classList.toggle("accordion--opened");
  if (accordionItem.classList.contains("accordion--opened")) {
    accordionContent.style.maxHeight =
      accordionContent.scrollHeight + 20 + "px";
  } else {
    accordionContent.style.maxHeight = null;
  }
});
// Бургер
const burger = document.querySelector(".burger-menu");
const links = document.querySelector(".header__nav");
const body = document.querySelector(".body");
const tabContent = document.querySelectorAll(".tab__content");
burger.addEventListener("click", (e) => {
  body.classList.toggle("body--opened-menu");
});
links.addEventListener("click", (e) => {
  const target = e.target;
  if (
    (target.classList.contains("header__link") &&
      body.classList.contains("body--opened-menu")) ||
    (target.closest(".header__btn") &&
      body.classList.contains("body--opened-menu"))
  ) {
    body.classList.remove("body--opened-menu");
  }
});
