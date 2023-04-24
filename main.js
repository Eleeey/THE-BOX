let btn = document.querySelector(".drop_dwn");
let nav = document.querySelector(".links")
btn.addEventListener('click',()=>{
    console.log(nav.classList)
    nav.classList.toggle("mobile_nav")
})
