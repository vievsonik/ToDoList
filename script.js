const submit = document.getElementById('submit');
const el = document.getElementById ('text');
const text  = el.innerText || el.textContent;
const whatToDo = document.getElementById ('what-to-do-div');
let writtenToDoList = '';



function displaytext (userToDoList); {
    let userToDoList =  writtenToDoList;
    const toDoList = document.createElement ("h2");
    toDoList.innerText = userToDoList;
    whatToDo.appendChild(userToDoList);  

}

function getTextFromPage (){
    writtenToDoList = text;

}


function addToList (){
    getTextFromPage ();
    displaytext (userToDoList);
} 

submit.addEventListener('click', addToList);