const library = document.getElementById("library");
const form = document.getElementById("form");
const showForm = document.getElementById("show-form");
const submit = document.getElementById("submit");

let libraryArr = [["a1","b1",1],["a2","b2",2],["a3","b3",3]];

let book1 = new Book(...libraryArr[0])
let book2 = new Book(...libraryArr[1])
let book3 = new Book(...libraryArr[2])

function Book(title, author, numOfPages){
  // the constructor...
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
//   this.background = "#file"
}
addBookToLibrary()
function addBookToLibrary(){
    for(i=0;i<libraryArr.length;i++){
    // Create a div node:
    const node = document.createElement("div");
    node.classList.add("card")
    let textnode = "";
    let keys = ["Author: ","Title: ","Number of Pages: "]
    let textnode2 = "";
    let textnode3 = "";
    // Create a text node:
        for(j=0;j<libraryArr[i].length;j++){
            textnode = document.createTextNode(keys[j]+libraryArr[i][j]+'\n')
            node.appendChild(textnode);
            node.appendChild(document.createNode('br'));
        }
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

function toggleVisibility(){
    if(form.style.display==="none"){
        form.style.display = "flex";
        library.style.display = "none"
    }else{
        form.style.display = "none";
        library.style.display = "flex"
    }
}

function addBookForm(){

}
submit.addEventListener("click", addBook)
showForm.addEventListener("click", toggleVisibility)
