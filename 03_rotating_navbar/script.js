menu = document.querySelector(".menu");
nav =  document.querySelector(".nav");
wrapper = document.querySelector(".wrapper");

bar = document.querySelector(".fa-bars");
cross = document.querySelector(".fa-xmark");

bar.addEventListener("click" , ()=>{
    menu.classList.add("menu-active");
    nav.classList.add("nav-active");
    wrapper.classList.add("wrapper-active");
    
});

cross.addEventListener("click" , ()=>{
    menu.classList.remove("menu-active");
    nav.classList.remove("nav-active");
    wrapper.classList.remove("wrapper-active");
    
});