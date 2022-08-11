const library = document.getElementById("library");
const form = document.querySelector("form");
// Modal
const showForm = document.getElementById("show-form");
const modal = document.getElementById("myModal");
const xModal = document.getElementById("close");
const submit = document.getElementById("submit");

let libraryArr = [["a1","b1",1,false],["a2","b2",2,false],["a3","b3",3,false]];

//maybe better looped declared so I can see in values in console
let book1 = new Book(...libraryArr[0])
let book2 = new Book(...libraryArr[1])
let book3 = new Book(...libraryArr[2])

// the constructor...
function Book(title, author, numOfPages, status){
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.isRead = status;
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
        for(j=0;j<libraryArr[i].length-1;j++){
            let textnode = document.createTextNode(keys[j]+libraryArr[i][j]+'\n')
            let div = details.appendChild(document.createElement('div'))
            div.appendChild(textnode);
        }
        const status = document.createElement("button")
        status.classList.add("status")//---------CHANGE--------------
        status.innerText = "Not Read"
        card.appendChild(status);
        library.appendChild(card);
    }
}
    //---------GUIDE--------------

// const addBook = (e)=>{
//     e.preventDefault();
//     let book = {
//         author: document.getElementById("author").value,
//         title: document.getElementById("title").value,
//         pages: document.getElementById("pages").value
//     }
//     library.push(book);
//     document.forms[0].reset();
// }

function addBook(e){
    e.preventDefault();  //to stop the form submitting
    let newbook = [document.getElementById("author").value,document.getElementById("title").value,document.getElementById("pages").value]
    libraryArr.push(newbook)
    document.forms[0].reset(); // to clear the form for the next entries
    library.innerHTML = "";
    showLibrary();
}

form.addEventListener("submit", addBook);
showForm.addEventListener("click", openModal);
xModal.addEventListener("click", closeModal);

//Modal functions
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

