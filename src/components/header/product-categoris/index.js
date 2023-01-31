import Dialog from "/src/js/dialog";

var dialog_container = document.querySelector(".product-categoris-container");
var dialog_cta = document.querySelector(".product-categoris-cta");
var product_categories = document.querySelector(".product-categoris");
var mobile = product_categories.querySelector(".mobile-category");

var dialog = new Dialog(".product-categoris", {});

var mediaQuery = window.matchMedia("(min-width: 1024px)");

function handleChange(e) {
  if (e.matches) {
    // on pc
    product_categories.classList.add("hidden");

    dialog_cta.addEventListener("mouseover", open);
    dialog_container.addEventListener("mouseleave", close);
  } else {
    // on mobile
    product_categories.classList.remove("hidden");

    dialog_cta.removeEventListener("mouseover", open);
    dialog_container.removeEventListener("mouseleave", close);
  }
}

mediaQuery.addEventListener("change", handleChange);
handleChange(mediaQuery);

function open() {
  dialog.open();
  closeOpenedMenus();
  mobile.classList.add("open");
}

function close() {
  dialog.close();
}

export function closeOpenedMenus() {
  var opend_menus = product_categories.querySelectorAll("ul.open");
  opend_menus.forEach((item) => {
    item.classList.remove("open");
  });
}
