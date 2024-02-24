const target_btn = document.querySelector(".Share-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function(event){
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closeModal = function(event){
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}