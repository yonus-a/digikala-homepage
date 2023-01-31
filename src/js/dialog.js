import { disableScroll, enableScroll } from "./scrollbar";
import "../css/dialog.scss";

const HIDDEN_CLASS = "hidden";
const TABBLE_ELEMENTS = `a[href],
area[href],
input:not([disabled]),
select:not([disabled]),
textarea:not([disabled]),
button:not([disabled]),
iframe,
[tabindex],
[contentEditable=true]`;

export default class Dialog {
  /**
   *
   * @param {CSSSelector} container  Where Dialog applies to.
   * @param {DialogOptions} options Instance options.
   */
  constructor(container, options) {
    var {
      moveFocusTo,
      returnFocusTo,
      moveDialogToDialogLayer,
      alwaysOnTop,
      trigger,
      triggerOn,
      exit_cta,
    } = options;

    var dialog = document.querySelector(container);
    var tabbleEls = dialog.querySelectorAll(TABBLE_ELEMENTS);
    this.first_tabbleEl = tabbleEls[0];
    this.last_tabbleEl = tabbleEls[tabbleEls.length - 1];
    this.tabbleEls = tabbleEls;
    this.dialog = dialog;
    this.moveDialogToDialogLayer = moveDialogToDialogLayer;
    this.dialog_parent = dialog.parentNode;
    this.alwaysOnTop = alwaysOnTop;
    this.triggerOn = triggerOn;

    if (moveFocusTo) {
      if (moveFocusTo === "first-element") {
        this.elForMoveFocus = tabbleEls[0];
      } else {
        this.elForMoveFocus =
          typeof moveFocusTo === "object"
            ? moveFocusTo
            : document.querySelector(moveFocusTo);
      }
    }

    if (returnFocusTo) {
      this.elForReturnFocus =
        typeof returnFocusTo === "object"
          ? returnFocusTo
          : document.querySelector(returnFocusTo);
    }

    if (trigger) {
      this.trigger =
        typeof trigger === "object" ? trigger : document.querySelector(trigger);
    }

    if (exit_cta) {
      this.exit_cta =
        typeof exit_cta === "object"
          ? exit_cta
          : document.querySelector(exit_cta);
    }

    if (trigger && triggerOn) {
      this.toggleListener();
    }

    if (exit_cta) {
      this.exitListener();
    }

    this.closeWhenEscPressed();
    this.trapfocus();
    this.closeWhenOutsideClicked = this.closeWhenOutsideClicked.bind(this);
  }

  open() {
    if (this.dialog.classList.contains(HIDDEN_CLASS)) {
      this.dialog.classList.remove(HIDDEN_CLASS);
      this.createDialogLayer();
      this.appendDialogToDialogLayer();
      this.showDialogLayer();
      if (this.elForMoveFocus) this.elForMoveFocus.focus();
      if (this.trigger) this.trigger.setAttribute("aria-expanded", "true");
      this.activate_closeWhenOutsideClicked();
      disableScroll();
    }
  }

  close() {
    if (!this.dialog.classList.contains(HIDDEN_CLASS)) {
      this.dialog.classList.add(HIDDEN_CLASS);
      if (this.elForReturnFocus) this.elForReturnFocus.focus();
      if (this.trigger) this.trigger.setAttribute("aria-expanded", "false");
      this.hideDialogLayer();
      this.returnDailogToActualPlace();
      this.disabled_closeWhenOutsideClicked();
      this.rmeoveDialogLayer();
      enableScroll();
    }
  }

  toggle() {
    if (this.dialog.classList.contains(HIDDEN_CLASS)) {
      this.open();
    } else {
      this.close();
    }
  }


  toggleListener() {
    this.trigger.addEventListener(this.triggerOn, () => {
      this.toggle();
    });
  }

  exitListener() {
    this.exit_cta.addEventListener(this.triggerOn, () => {
      this.close();
    });
  }

  createDialogLayer() {
    var dialogLayer = document.createElement("div");
    dialogLayer.classList.add("dialog-layer", "hidden");
    document.body.appendChild(dialogLayer);
    this.dialogLayer = dialogLayer;
    this.putDialogAlwaysOnTop();
  }

  rmeoveDialogLayer() {
    document.body.removeChild(this.dialogLayer);
  }

  appendDialogToDialogLayer() {
    if (this.moveDialogToDialogLayer) {
      this.dialogLayer.appendChild(this.dialog);
    }
  }

  returnDailogToActualPlace() {
    if (this.moveDialogToDialogLayer) {
      this.dialog_parent.appendChild(this.dialog);
    }
  }

  showDialogLayer() {
    this.dialogLayer.classList.remove(HIDDEN_CLASS);
  }

  hideDialogLayer() {
    this.dialogLayer.classList.add(HIDDEN_CLASS);
  }

  putDialogAlwaysOnTop() {
    if (this.alwaysOnTop) {
      this.dialog.style.zIndex = Number.MAX_SAFE_INTEGER;
      this.dialogLayer.style.zIndex = Number.MAX_SAFE_INTEGER - 1;
    }
  }

  activate_closeWhenOutsideClicked() {
    setTimeout(() => {
      window.addEventListener("click", this.closeWhenOutsideClicked);
    });
  }

  disabled_closeWhenOutsideClicked() {
    window.removeEventListener("click", this.closeWhenOutsideClicked);
  }

  closeWhenOutsideClicked({ target }) {
    if (!this.dialog.contains(target)) {
      this.close();
    }
  }

  closeWhenEscPressed() {
    this.dialog.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.close();
      }
    });
  }

  trapfocus() {
    this.first_tabbleEl.addEventListener("keydown", (e) => {
      if (e.shiftKey && e.code === "Tab") {
        e.preventDefault();
        this.last_tabbleEl.focus();
      }
    });

    this.last_tabbleEl.addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.code === "Tab") {
        e.preventDefault();
        this.first_tabbleEl.focus();
      }
    });
  }
}
