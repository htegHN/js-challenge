const h1 = document.querySelector("body h1");
const body = document.body;

//h1에 class 추가하여 색 변경해주기
h1.classList.add("white");
const colorWhite = document.querySelector(".white");
colorWhite.style.color = "white";

//창크기에 따른 배경색 변경
function handleWindowResize() {
  if (window.innerWidth <= 600) {
    body.style.backgroundColor = "lightblue";
  } else if (window.innerWidth > 600 && window.innerWidth <= 900) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

handleWindowResize();

window.addEventListener("resize", handleWindowResize);
