document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".layout__menu-toggle")
    let aside = document.querySelector(".layout__aside")
    let icon__bars = document.querySelector(".layout__menu-toggle .fa-bars")
    let icon__xmark = document.querySelector(".layout__menu-toggle .fa-xmark")

    button.addEventListener("click", (event) => {
        let visible = document.querySelector(".layout__aside--visible")
        if(!visible){
            aside.classList.add("layout__aside--visible")
            icon__bars.style.opacity = 0
            icon__xmark.style.opacity = 1
        } else{
            aside.classList.remove("layout__aside--visible")
            icon__bars.style.opacity = 1
            icon__xmark.style.opacity = 0
        }
    })

    window.addEventListener("resize", (event) => {
        let size = parseInt(document.body.clientWidth);
        if(size <= 1060){
            aside.classList.remove("layout__aside--visible")
            icon__bars.style.opacity = 1
            icon__xmark.style.opacity = 0
        }
    })

})