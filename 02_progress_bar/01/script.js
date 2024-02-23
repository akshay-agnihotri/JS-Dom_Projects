let current =0;

next_btn = document.querySelector(".next");
prv_btn = document.querySelector(".prv");
para  = document.querySelectorAll(".gray-border");
para_arr = Array.from(para);
line_blue = document.querySelectorAll(".line-blue");
line_blue_arr = Array.from(line_blue);


next_btn.addEventListener("click" , function(){
    prv_btn.classList.remove("disabled");
    if(current === 4){
        return;
    }
    if(current === 2){
        next_btn.classList.add("disabled");
    }
    line_blue_arr[current].classList.add("full-width");
    current++;
    para_arr[current].classList.add("blue-border");
});


prv_btn.addEventListener("click" , function(){
    next_btn.classList.remove("disabled");
    if(current === 0) return;
    if(current === 1){
        prv_btn.classList.add("disabled");
    }
    para_arr[current].classList.remove("blue-border");
    current--;
    line_blue_arr[current].classList.remove("full-width");
});

