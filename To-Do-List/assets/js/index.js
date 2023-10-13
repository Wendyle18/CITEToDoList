let taskContainer =document.querySelector("ul");
let newTask = document.querySelector("#addbutton");
let checkbox =document.querySelectorAll("li input[type=checkbox]");
let taskItemLabel = document.querySelectorAll("li label");



// console.dir(checkbox);
/*
for (let elemIndex =0; elemIndex < checkbox.length; elemIndex++){
    checkbox[elemIndex].onclick=function(){
        alert('GG');
    }
}
*/

checkbox.forEach(checkboxBoxBehavior);
taskItemLabel.forEach(taskItemClickEvent);



function checkboxBoxBehavior(elem, key){
    elem.onclick= function(){
        if(elem.checked){
            elem.parentElement.classList.add ('checked');
        
        }else{
    
            elem.parentElement.classList.remove ('checked');
        }
    }
}

function taskItemClickEvent(elem){
    elem.onclick = function (){
    

    let inputnewElem = document.createElement("input");
    
   
    inputnewElem.type = "text";
    inputnewElem.autofocus = "true";
    inputnewElem.maxLength = "30";
    inputnewElem.value = "elem.innerText";

    inputnewElem.addEventListener("focusout", function (){
        
        
    })

    elem.replaceWith(inputnewElem);
    

    }
}
















 
//Add list
newTask.addEventListener("click", function(){
    let newTaskElem = document.createElement("li");
    let newCheckBox = document.createElement("input");
    let taskLabel = document.createElement ("label");

    newCheckBox.type= "checkbox";
    taskLabel.innerText = prompt("New task:");

   
    confirm ('Are you sure to add this?');
   
    if(taskLabel.innerText == ""){
     return 0;   
    }


    newTaskElem.classList.add('appended');
    checkboxBoxBehavior(newTaskElem.appendChild (newCheckBox) );
    newTaskElem.appendChild(taskLabel);
    taskContainer.appendChild (newTaskElem);
    newTaskElem.classList.add('appended');

    setTimeout(function(){
        newTaskElem.classList.remove('appended');
    },5)
  
})






