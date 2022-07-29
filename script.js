let myLibrary = ["book","book","book"];

function Book(title, author, numOfPages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
}

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}
addBookToLibrary()
function addBookToLibrary() {
    for(i=0;i<myLibrary.length;i++){
    // Create a div node:
    const node = document.createElement("div");
    node.classList.add("card")

    // Create a text node:
    const textnode = document.createTextNode(myLibrary[i]);

    // Append the text node to the "li" node:
    node.appendChild(textnode);

    // Append the "li" node to the list:
    document.querySelector("main").appendChild(node);
    }
}

const book = document.getElementById("books")
const form = document.getElementById("form");
const formButton = document.getElementById("form-button");



function toggle(){
    if(form.className == "hide"){
        form.className = "flex";
        book.className = "hide";
    }
    else{
        form.className = "hide"
        book.className = "flex";
    }
}

function addBookForm(){

}

formButton.addEventListener("click", toggle)
