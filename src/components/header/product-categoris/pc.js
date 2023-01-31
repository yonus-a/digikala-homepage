var items = document.querySelectorAll(".product-categoris > li > a");
var mediaQuery = window.matchMedia("(min-width: 1024px)");

function handleChange(e) {
  if (e.matches) {
    items.forEach((item) => {
      item.addEventListener("mouseover", handleMouseover);
    });
  } else {
    items.forEach((item) => {
      item.removeEventListener("mouseover", handleMouseover);
    });
  }
}

function handleMouseover({ target }) {
  if (target.getAttribute("aria-haspopup") === "true") {
    var opend_menu = document.querySelector(
      ".product-categoris > li > ul.open"
    );
    if (opend_menu) {
      opend_menu.classList.remove("open");
    }
    var submenu = target.nextElementSibling;
    if (submenu) submenu.classList.add("open");
  }
}

mediaQuery.addEventListener("change", handleChange);
handleChange(mediaQuery);
