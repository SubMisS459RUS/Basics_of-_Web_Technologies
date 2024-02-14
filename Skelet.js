// прокрутка при клике

const menuLinks = document.querySelectorAll('.[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
//клик работает, но ничего не происходит
    function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      let gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;
      gotoBlockValue -= document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

// бургер
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
});

