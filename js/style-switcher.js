// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click",()=>{
//     document.querySelector(".style-switcher").classList.toggle("open");
// })

// hide style switcher on scroll

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// THEME COLORS

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Example: Set the active style to "color-2"
setActiveStyle("color-1");

// LIGHT AND DARK 

// const  dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click",()=>{
//     dayNight.querySelector("i").classList.add("fa-sun");
//     dayNight.querySelector("i").classList.add("fa-moon");
//     document.body.classList.toggle("dark");

// })
// window.addEventListener("load",()=>{
//     if(document.body.classList.contains("dark")){
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

const dayNight = document.querySelector(".day-night");

        dayNight.addEventListener("click", () => {
            const icon = dayNight.querySelector("i");
            icon.classList.toggle("fa-moon");
            icon.classList.toggle("fa-sun");
            document.body.classList.toggle("dark");
        });

        window.addEventListener("load", () => {
            const icon = dayNight.querySelector("i");
            if (document.body.classList.contains("dark")) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        });
