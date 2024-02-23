myContainer = document.querySelector(".container");

myContainer.addEventListener("click" , function(event){
    
    const clickedSec = event.target.closest(".sec") // Find the closest child element of the clicked element
    const fullWidthSec = myContainer.querySelector(".fullWidth"); 
    if (clickedSec){
        fullWidthSec.classList.remove("fullWidth");
        clickedSec.classList.add("fullWidth");
    }

});
