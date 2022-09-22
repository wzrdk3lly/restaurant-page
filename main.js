import { renderMenu} from "./menu.js";
import { renderAboutUs} from "./aboutUs.js"

// renders main menu page into html upon page load
renderMenu();

let main = document.querySelector(".main-section")
// let navButton = document.querySelector("#nav-button");
// let menu = document.querySelector("#menu");

// console.log(main.children[1].classList.contains("menu"))
// console.log(main.children[1].classList.contains("about-us"))

// implement the render of about us page
main.addEventListener("click",(e) => {
    if(e.target.tagName === "A"){
        if (e.target.parentNode.parentNode.classList.contains("menu")){
            console.log("this is the menu page")
            document.body.innerHTML = " "
            renderAboutUs(); 
        }
        else if(e.target.parentNode.parentNode.classList.contains("about-us")){
            console.log("this is the about us page")
            document.body.innerHTML = " " 
            renderMenu();
        }
    }
  
})
