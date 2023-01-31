import Dialog from "/src/js/dialog";

var dialog_cta = document.querySelector(".location-cta");

var dialog = new Dialog(".location-dialog", {
  trigger: dialog_cta,
  triggerOn: "click",
  exit_cta: ".location-dialog-exit",
  moveFocusTo: ".location-dialog .dialog-body li:first-child button",
  returnFocusTo: dialog_cta,
  moveDialogToDialogLayer: true,
  alwaysOnTop: true,
});
