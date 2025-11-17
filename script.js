function onPageLoad() {
    const btn = document.querySelector(".nav-button")

    const menu = document.querySelector("#categories")

    btn.addEventListener("click", function() {
        if(menu.classList.contains("open")) {
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
        
    })

}

window.addEventListener("load", onPageLoad )