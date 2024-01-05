const myLibrary = [];

function Book (title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function add(){
    const inputBox = document.querySelector(".bookForm");
    inputBox.style.display = "block";
}

function addBookToLibrary(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const statusElement = document.getElementById("read");
    const status = statusElement.checked ? "Read" : "Unread";

    const userBook = new Book(title, author, pages, status);
    myLibrary.push(userBook);
}

function Display(){

    document.querySelector(".container").innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++){
        const div = document.createElement("div");
        div.innerHTML = `<h2>${myLibrary[i].title}</h2>` +
                        `<p>${myLibrary[i].author}</p>` +
                        `<p>${myLibrary[i].pages}</p>` +
                        `<button class="btn statusBtn">${myLibrary[i].status}</button>` +
                        `<button class="btn removeBtn">Remove</button>`;
        div.classList.add("card");
        document.querySelector(".container").append(div);
    }
}

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    addBookToLibrary();
    console.log("Book added. Library length: " + myLibrary.length);
    Display();
    const inputBox = document.querySelector(".bookForm");
    inputBox.style.display = "none";
})

console.log(myLibrary);

document.querySelector(".container").addEventListener("click", (event) =>{
    if(event.target.classList.contains("removeBtn")){
        const indexToRemove = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
        myLibrary.splice(indexToRemove, 1);
        Display();
    }
})

document.querySelector(".container").addEventListener("click", (event) =>{
    if(event.target.classList.contains("statusBtn")){
        console.log(event.target.parentNode)
        console.log(event.target.parentNode.parentNode)
        console.log(event.target.parentNode.parentNode.children)
        console.log(Array.from(event.target.parentNode.parentNode.children))
        console.log(Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode))
        const indexToUpdate = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
        const currentStatus = myLibrary[indexToUpdate].status;
        myLibrary[indexToUpdate].status = currentStatus === "Read" ? "Unread" : "Read";
        Display();
    }
})