const library = document.getElementById("library");
const form = document.getElementById("form");
//display:none by default
const showForm = document.getElementById("show-form");
const submit = document.getElementById("submit");

let libraryArr = [["a1","b1",1],["a2","b2",2],["a3","b3",3]];

//maybe better looped declared so I can see in values in console
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

showLibrary()

function showLibrary(){
    for(i=0;i<libraryArr.length;i++){
        const card = document.createElement("div");
        const accent = document.createElement("div");
        const bookCover = document.createElement("div");
        const details = document.createElement("div")

        card.classList.add("card")
        accent.classList.add("accent")
        bookCover.classList.add("book-cover")
        details.classList.add("details")

        card.appendChild(accent);
        card.appendChild(bookCover);
        card.appendChild(details);

        let keys = ["Author: ","Title: ","Number of Pages: "];
        for(j=0;j<libraryArr[i].length;j++){
            let textnode = document.createTextNode(keys[j]+libraryArr[i][j]+'\n')
            let div = details.appendChild(document.createElement('div'))
            div.appendChild(textnode);
        }
        library.appendChild(card);
    }
}

function addBook(e){
    e.preventDefault();  //to stop the form submitting
    let newbook = [document.getElementById("author").value,document.getElementById("title").value,document.getElementById("pages").value]
    libraryArr.push(newbook)
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
