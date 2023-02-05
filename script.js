const submit = document.getElementById('submit');
const el = document.getElementById ('text');
const text  = el.innerText || el.textContent;
const submm = document.getElementById ('submit2');
const whatToDo = document.getElementById ('what-to-do-div');
let writtenToDoList = 'ggaaaweeweewe';



function displaytext (letter) {
    const toDoList = document.createElement ("h2");
    toDoList.innerText = letter;
    whatToDo.appendChild(toDoList);  

}
function  displayButtons ()  {
    writtenToDoList.split('').forEach((letter) => {
        generateButtons(letter)
    })
}

function addToList (){
    displayButtons ();
} 

submm.addEventListener('click', addToList);