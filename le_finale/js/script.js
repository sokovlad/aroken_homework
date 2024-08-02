// Галлерея-слайдер
const swiper = new Swiper(".hero__slider", {
  spaceBetween: 15,
  slidesPerView: 1,
  loopAdditionalSlides: 2,
  autoplay: {
    enabled: true,
    delay: 0,
  },
  loop: true,
  speed: 2500,

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
// Отзывы-слайдер
const swiper2 = new Swiper(".testimonials__slider", {
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: ".testimonials__btn--next",
    prevEl: ".testimonials__btn--prev ",
  },

  breakpoints: {
    1101: {
      slidesPerView: 2,
    },
    901: {
      slidesPerView: 1.5,
    },
    601: {
      slidesPerView: 1.1,
    },
  },
});
// Показать больше - эпизоды
const episodesBtn = document.querySelector(".episodes__btn");
const episodesMore = document.querySelector(".episodes__more");

episodesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  episodesMore.classList.toggle("episodes__more--show");
  if (!episodesMore.classList.contains("episodes__more--show")) {
    episodesMore.style.maxHeight = null;
    episodesBtn.textContent = "BROWSE ALL EPISODES";
  } else {
    episodesMore.style.maxHeight = episodesMore.scrollHeight + "px";
    episodesBtn.textContent = "Show less EPISODES";
  }
});
// Показать больше - статьи
const newsBtn = document.querySelector(".news__btn");
const newsMore = document.querySelector(".news__list-more");

newsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  newsMore.classList.toggle("news__list-more--show");
  if (!newsMore.classList.contains("news__list-more--show")) {
    newsMore.style.maxHeight = null;
    newsBtn.textContent = "BROWSE ALL";
  } else {
    newsMore.style.maxHeight = newsMore.scrollHeight + "px";
    newsBtn.innerText = "SHOW LESS";
  }
});
