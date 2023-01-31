var menu = document.querySelector(".product-categoris");

var mediaQuery = window.matchMedia("(max-width: 1024px)");
mediaQuery.addEventListener("change", handleChange);
handleChange(mediaQuery);

function handleChange(e) {
  if (e.matches) {
    menu.addEventListener("click", handleClick);
  } else {
    menu.removeEventListener("click", handleClick);
  }
}

function handleClick({ target }) {
  menuitem = target.closest("a[aria-haspopup]");
  if (menuitem) {
    var submenu = menuitem.nextElementSibling;
    submenu.classList.toggle("open");
  }
}
