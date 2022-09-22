import { renderMenu} from "./menu.js";
import { renderAboutUs} from "./aboutUs.js"

// renders main menu page into html upon page load
renderMenu();


let aboutUs = document.querySelector("#about-us");

// implement the render of about us page
aboutUs.addEventListener("click",(e) => {
    document.body.innerHTML = " "
    renderAboutUs();
})