import { renderMenu } from "./menu.js";
import { renderAboutUs } from "./aboutUs.js";

// renders main menu page into html upon page load
renderMenu();

let main = document.querySelector(".main-section");

main.addEventListener("click", (e) => {
  // console.log(e.target.tagName)
  if (e.target.tagName === "A") {
    console.log(e.target.innerText === "ABOUT US");
    if (
      e.target.innerText === "ABOUT US" ||
      e.target.innerText === "About us"
    ) {
      document.body.innerHTML = " ";
      renderAboutUs();
    } else if (e.target.innerText === "MENU" || e.target.innerText === "Menu") {
      document.body.innerHTML = " ";
      renderMenu();
    }
  }
});
