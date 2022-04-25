const body = document.querySelector("body")
const headerBtn = document.querySelector(".site-header-btn")



headerBtn.addEventListener("click", ()=> {
    body.classList.toggle("dark-mode")
})