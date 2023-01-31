import sprite from "bundle-text:/media/images/sprite.svg";

const div = document.createElement("div");
div.classList.add("svg-sprite");
div.innerHTML = sprite;
document.body.appendChild(div);
