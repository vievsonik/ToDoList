// const submit = document.getElementById('submit');
// const text = document.getElementById ('text');
// const something = document.getElementById ('something');
const whatToDo = document.getElementById ('what-to-do-div');
// let writtenToDoList = 'ggaaaweeweewe';
// const demo = document.getElementById ('demo');
// const inputText = document.getElementById("text").value;
const textInInput = document.getElementById("text");


function generateText (){
    const toDoList = document.createElement ("h2");
    toDoList.innerHTML =  document.getElementById("text").value;
    whatToDo.appendChild(toDoList);
    // const x = document.getElementById("text");
    // document.getElementById("demo").innerHTML = x;
}



function addToList (){
    generateText ();
    textInInput.value= ""

} 
submit.addEventListener('click', addToList);