const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes()
{
    noteContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function UpdateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img); 
    noteContainer.appendChild(inputBox); 
});

noteContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); 
        UpdateStorage();
    }
    else if(e.target.tagName === "P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup=function(){
                UpdateStorage();
            }
        })
        }
});

document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.execCommand('insertLineBreak');
    }
});
