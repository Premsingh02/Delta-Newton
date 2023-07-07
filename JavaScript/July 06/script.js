// const button = document.querySelector("#changeButton");

// // allways use arrow functions for callbakcs.
// const id = button.addEventListener("click",()=>{
//     const h1 = document.querySelector("h1");
//     h1.innerText= "Now I can change";
// })

const addTaskButton = document.querySelector("#addTaskButton");

addTaskButton.addEventListener("click", ()=>{
    const input = document.querySelector("#taskInput");
    // alert(input.value);
    const newTsk = document.createElement("li");
    newTsk.innerText = input.value;
    const list = document.querySelector("#list");
    list.appendChild(newTsk);
})