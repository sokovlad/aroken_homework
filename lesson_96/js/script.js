(function () {
  const burger = document.querySelector(".burger-menu");
  const links = document.querySelector(".header__list");
  const body = document.querySelector(".body");
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
})();
