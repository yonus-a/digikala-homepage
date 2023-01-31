var buttom_section = document.querySelector("header .bottom-section");

var beforeScroll = 0;
window.addEventListener("scroll", () => {
  var scrolled = window.scrollY;
  var overflow = getComputedStyle(document.documentElement).overflow;

  if (scrolled > beforeScroll && overflow !== "hidden") {
    // scroll dowm
    buttom_section.classList.add("hidden");
  } else {
    // scroll up
    buttom_section.classList.remove("hidden");
  }
  beforeScroll = scrolled;
});
