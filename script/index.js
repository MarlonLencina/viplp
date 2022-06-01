
// acordion open/close logic

const acordions = document.getElementsByClassName("accordion__card")

for (let accordion of acordions) {
    accordion.addEventListener("click", () => {
        const accordionContent = accordion.lastElementChild

        const accordionIsActive = accordionContent.classList.contains("active");

        if (accordionIsActive) {
            accordionContent.classList.remove("active")
            accordion.childNodes[1].childNodes[3].src = "./img/assets/plus.svg"
            return
        }

        accordionContent.classList.add("active")
        accordion.childNodes[1].childNodes[3].src = "./img/assets/lessicon.svg"

    })
}

// scroll 

const FAQ = document.querySelector("#FAQ")


FAQ.addEventListener("scroll", (e) => console.log(e))

// sidebar on and off

const sidebarButton = document.querySelector("#sidebarButton")


sidebarButton.addEventListener("click", () => {
    console.log("triste")
})
