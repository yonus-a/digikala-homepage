var GET_MENUITEMS = ".navbar > li > a";
var animated_underline = document.querySelector(".animated-line");
var menuItems = document.querySelectorAll(GET_MENUITEMS);
console.log(menuItems);

menuItems.forEach((item) => {
  item.addEventListener("mouseover", ({ target }) => {
    if (target !== animated_underline) {
      var menuItem = target.closest(GET_MENUITEMS);
      animated_underline.style.left = target.offsetLeft - 8 + "px";
      animated_underline.style.width = `${menuItem.offsetWidth + 16}px`;
    }
  });

  item.addEventListener("mouseleave", () => {
    animated_underline.style.width = "0px";
  });
});
