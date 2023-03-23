const title = document.getElementById("title");
const colors = ["lightgreen", "lightblue", "tomato", "orchid"];

const superEventHandler = {
  handleTitleMouseenter: () => {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handleTitleMouseleave: () => {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handlerTitleContextmenu: () => {
    title.innerText = "That was right click!";
    title.style.color = colors[2];
  },
  handleWindowResize: () => {
    title.innerText = "You just resized!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleTitleMouseenter);
title.addEventListener("mouseleave", superEventHandler.handleTitleMouseleave);
window.addEventListener(
  "contextmenu",
  superEventHandler.handlerTitleContextmenu
);
window.addEventListener("resize", superEventHandler.handleWindowResize);
