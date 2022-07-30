const book = document.getElementById("books");
const form = document.getElementById("form");
const showForm = document.getElementById("show-form");
const submit = document.getElementById("submit");

// let myLibrary = [];
let library = [["a1","b1",1],["a2","b2",2],["a3","b3",3]];

function Book(title, author, numOfPages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
//   this.background = "#file"
}

// addBookToLibrary()
// function addBookToLibrary() {
//     for(i=0;i<myLibrary.length;i++){
//     // Create a div node:
//     const node = document.createElement("div");
//     node.classList.add("card")

//     // Create a text node:
//     const textnode = document.createTextNode(myLibrary[i]);

//     // Append the text node to the "li" node:
//     node.appendChild(textnode);

//     // Append the "li" node to the list:
//     document.querySelector("main").appendChild(node);
//     }
// }

addBookToLibrary()
function addBookToLibrary() {
    for(i=0;i<library.length;i++){
    // Create a div node:
    const node = document.createElement("div");
    node.classList.add("card")
    
    let textnode = "";
    // Create a text node:
    for(j=0;j<library.length;j++){
        textnode = document.createTextNode("author: "+library[i][j]);

        // console.log(library[i][j])
    }
    // Append the text node to the "li" node:
    node.appendChild(textnode);



    // Append the "li" node to the list:
    document.querySelector("main").appendChild(node);
    }
}


const addBook = (e)=>{
    e.preventDefault();  //to stop the form submitting
    let book = {
        author: document.getElementById("author").value,
        title: document.getElementById("title").value,
        pages: document.getElementById("pages").value
    }
    library.push(book);
    document.forms[0].reset(); // to clear the form for the next entries
}

//save maybe better
function toggleVisibility(){
    if(form.style.display==="none"){
        form.style.display = "flex";
        book.style.display = "none"
    }else{
        form.style.display = "none";
        book.style.display = "flex"
    }
}

//produces more problems
// function toggle(){
//     if(form.className == "hide"){
//         form.className = "flex";
//         book.className = "hide";
//     }
//     else{
//         form.className = "hide"
//         book.className = "flex";
//     }
// }

function addBookForm(){

}
submit.addEventListener("click", addBook)
showForm.addEventListener("click", toggleVisibility)
