const input = document.querySelector("input");
const icon = document.querySelector("i");

function addClass(){
    const computedStyleWidth = window.getComputedStyle(input).getPropertyValue("width");
    if(computedStyleWidth === "0px"){
        input.classList.add("active");
        input.focus();
    }
    else{
        input.classList.remove("active");
    }
}

icon.addEventListener("click"  , addClass);

// icon.removeEventListener("click" , addClass );                