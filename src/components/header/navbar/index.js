import Dialog from "/src/js/dialog";
import { closeOpenedMenus } from "../product-categoris/index";

var dialog_cta = document.querySelector(".mobile-cta");

var dialog = new Dialog(".main-nav", {});

dialog_cta.addEventListener("click", () => {
  closeOpenedMenus();
  dialog.toggle();
});

var mediaQuery = window.matchMedia("(min-width: 1024px)");

function handleChange(e) {
  if (e.matches) {
    // on pc
    dialog.close();
  } else {
  }
}

mediaQuery.addEventListener("change", handleChange);
handleChange(mediaQuery);
