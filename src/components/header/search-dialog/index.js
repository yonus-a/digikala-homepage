import Dialog from "/src/js/dialog";

var dialog_cta = document.querySelector(".search-cta");

var dialog = new Dialog(".search-dialog", {
  trigger: dialog_cta,
  triggerOn: "click",
  exit_cta: ".search-dialog-exit",
  moveFocusTo: ".search-dialog .search-input",
  returnFocusTo: dialog_cta,
});
