const container_box = document.querySelector(".container");
const loading_number = document.querySelector("h1");
let progress = 0;

document.addEventListener('DOMContentLoaded', () => {
    container_box.classList.add("load");
    loading_number.classList.add("load");
    function updatetext(){
        if(progress < 100){
            progress++;
            loading_number.textContent = progress + "%";
            setTimeout(updatetext , 15 );
        }
    }
    updatetext();
});
