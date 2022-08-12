const library = document.getElementById("library");
const form = document.querySelector("form");
// Modal variables
const showForm = document.getElementById("show-form");
const modal = document.getElementById("myModal");
const xModal = document.getElementById("close");
const submit = document.getElementById("submit");

let list = [{
    author:"Juan",
    title:"Book One",
    pages:123,
    isRead:false,
  },
  {
    author:"Wong",
    title:"Book Two",
    pages:1234,
    isRead:true,
  },
  {
    author:"Gaben",
    title:"Book Four",
    pages:124,
    isRead:true,
  }
];

// the constructor...
function Book(author, title, pages, status){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = status;
//   this.background = "#file"
}

showLibrary()

function showLibrary(){
    for(i=0;i<list.length;i++){
        const card = document.createElement("div");
        const accent = document.createElement("div");
        const bookCover = document.createElement("div");
        const details = document.createElement("div")

        card.classList.add("card")
        accent.classList.add("accent")
        bookCover.classList.add("book-cover")
        details.classList.add("details")

        card.append(accent, bookCover, details);

        const author = document.createElement('div');
        const title = document.createElement('div');
        const pages = document.createElement('div');
      
        author.innerText = "Author: "+list[i].author;
        title.innerText = "Title: "+list[i].title;
        pages.innerText = "Pages: "+list[i].pages;

        details.append(author, title, pages);
        
        //isRead button
        const status = document.createElement("button")
        status.classList.add("status")
        if(list[i].isRead){
            status.classList.add("read");
            status.innerText = "Read";
        }else{
            status.classList.add("not-read");
            status.innerText = "Not read";
        }
        status.addEventListener('click', isRead)
        card.appendChild(status);
        library.appendChild(card);

        //remove button
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerText = "Remove"
        remove.addEventListener('click', removeCard)
        card.appendChild(remove)
        card.id
    }
}

function addBook(e){
    e.preventDefault();//stop page refresh

    const isRead = document.getElementById("is-read")
    const myFormData = new FormData(e.target);
    let formDataObj = Object.fromEntries(myFormData.entries());
    
    //append data
    Object.assign(formDataObj, {isRead:isRead.checked});
    list.push(formDataObj)

    // to clear the form for the next entries
    document.forms[0].reset();
    library.innerHTML = "";
    showLibrary();
}

//Card Buttons
//wait for JSON to delete in object file
function removeCard(e){
    this.parentNode.remove()
}
//wait for JSON to edit in object file
function isRead(){
    if(this.innerText=="Read"){
        this.classList.remove("read");
        this.classList.add("not-read");
        this.innerText = "Not read";
    }
    else if(this.innerText=="Not read"){
        this.classList.add("read");
        this.classList.remove("not-read");
        this.innerText = "Read";
    }
}

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

form.addEventListener("submit", addBook);
showForm.addEventListener("click", openModal);
xModal.addEventListener("click", closeModal);

