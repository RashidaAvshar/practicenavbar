document.querySelector("#menu").addEventListener("click", ()=>{
     let navMenu = document.querySelector("#mobile-header-deactive");
     navMenu.classList.remove("mobile-header-deactive")
     navMenu.classList.add("mobile-header-active");
})
document.querySelector("#x").addEventListener("click", ()=>{
    let navMenu = document.querySelector("#mobile-header-deactive");
     navMenu.classList.remove("mobile-header-active")
     navMenu.classList.add("mobile-header-deactive");
})