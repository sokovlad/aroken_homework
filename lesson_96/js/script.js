(function () {
  const burger = document.querySelector(".burger-menu");
  const links = document.querySelector(".header__list");
  const body = document.querySelector(".body");
  const gift = document.querySelector(".about__btn-play");
  const modal = document.querySelector(".modal");
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
})();
