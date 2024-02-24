const inputField  = document.querySelector("#newtask input");


document.querySelector("#push").onclick = function(){
    
    if(inputField.value.length == 0){ // adding validation such that if input field is empty then alert message should be displayed..
        alert("Please Enter a Task");
    }

    else{
        document.querySelector("#tasks").innerHTML +=
        `
        <div class="task">

           <span id="taskname">
              ${
                inputField.value
              }
           </span>

           <buttton class="delete">
             <i class="fa-regular fa-trash-can"></i>
           </buttton>

        </div>

        `
        inputField.value = null;


    }

    const delete_btns = document.querySelectorAll(".delete");
    console.log(delete_btns);

    for(let i=0;i<delete_btns.length;i++){
        delete_btns[i].onclick = function(){
            this.parentNode.remove();
        }
    }

}

