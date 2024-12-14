// function getData(){
//     let data = document.querySelector("input").value;
// let btn = document.querySelector("#add-btn");
// document.querySelector("p").innerText = data;
// console.log(data);
// };

let btn = document.querySelector("#add-btn");
let text = document.querySelector("p");

btn.addEventListener("click" , () => {
    // getData();
    let data = document.querySelector("input").value;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check";
    checkbox.name = "check";

    let label = document.createElement("label");
    label.htmlFor = data;
    label.id = "Textid";
    //label.append.apply(document.createTextNode(data));
    label.innerText=data;

    let deleteBox = document.createElement("button");
    deleteBox.classList ="Deletebtn";
    deleteBox.innerText = "Delete";
    deleteBox.addEventListener("click" , ()=>{
        div.removeChild(taskDiv);
        
    })

    let taskDiv = document.createElement("span");
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteBox);
    //taskDiv.classList = "hide";
    taskDiv.appendChild(document.createElement("br"));


    let div = document.querySelector(".contnier");
    div.appendChild(taskDiv);
    
    
    // text.innerHTML += checkbox + label;

    console.log(data);
    

});
    
    