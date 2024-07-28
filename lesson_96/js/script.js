(function () {
  const burger = document.querySelector(".burger-menu");
  const links = document.querySelector(".header__list");
  const body = document.querySelector(".body");
  const gift = document.querySelector(".about__btn-play");
  const modal = document.querySelector(".modal");
  const tabControls = document.querySelector(".tab__controls");
  const tabContent = document.querySelectorAll(".tab__content");
  // Бургер
  burger.addEventListener("click", (e) => {
    body.classList.toggle("body--opened-menu");
  });
  links.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("header__link") &&
      body.classList.contains("body--opened-menu")
    ) {
      body.classList.remove("body--opened-menu");
    }
  });
  // Модалка
  gift.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.add("body--opened-modal");
  });
  modal.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target == modal || target.closest(".modal__cancel")) {
      body.classList.remove("body--opened-modal");
    }
  });
  // Табы
  tabControls.addEventListener("click", (e) => {
    e.preventDefault();
    const tabControl = e.target.closest(".tab__controls-link");

    if (!tabControl) return;
    if (tabControl.classList.contains("tab__controls-link--active")) return;

    const tabContentId = tabControl.getAttribute("href");
    const tabContent = document.querySelector(tabContentId);
    const activeContent = document.querySelector(".tab__content--show");
    const activeTab = document.querySelector(".tab__controls-link--active");

    if (activeTab) activeTab.classList.remove("tab__controls-link--active");
    if (activeContent) activeContent.classList.remove("tab__content--show");

    tabContent.classList.add("tab__content--show");
    tabControl.classList.add("tab__controls-link--active");
  });
  // Аккордеон
  const accordionLists = document.querySelectorAll(".accordion-list");
  accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector(
        ".accordion-list__item--opened"
      );
      const accordionOpenedContent = accordionList.querySelector(
        ".accordion-list__item--opened .accordion-list__content"
      );
      const accordionControl = e.target.closest(".accordion-list__control");
      if (!accordionControl) return;
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove("accordion-list__item--opened");
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();
// Слайдер-галерея
const swiper = new Swiper(".gallery__slider", {
  spaceBetween: 15,
  slidesPerView: 1,

  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },

  breakpoints: {
    1101: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    801: {
      slidesPerView: 3,
    },
    601: {
      slidesPerView: 2,
    },
    501: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});
// Слайдер-отзывы
const swiper2 = new Swiper(".feedback__slider", {
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,

  navigation: {
    nextEl: ".feedback__next",
    prevEl: ".feedback__prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    1101: {
      slidesPerView: 1.8,
    },
    901: {
      slidesPerView: 1.3,
    },
    501: {
      slidesPerView: 1.2,
    },
  },
});
// Маска для инпута
const telInputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(telInputs);
