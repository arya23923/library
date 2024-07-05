const library = [
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        pages: 371,
        rating: 5,
        read : 'read'
    },
    {
        title: 'First they killed my father',
        author: 'Loung Ung',
        pages: 238,
        rating: 4,
        read : 'read'
    },
    {
        title: 'Pachinko',
        author: 'Min Jin Lee',
        pages: 490,
        rating: 5,
        read : 'read'
    },
    {
        title: 'Silent Honor',
        author: 'Danielle Steel',
        pages: 353,
        rating: 5,
        read : 'read'

    },
    {
        title: 'Tea Girl of Hummingbird Lane',
        author: 'Lisa See',
        pages: 384,
        rating: 5,
        read : 'read'
    }
]

let book_section = document.querySelector(".book-section");
    book_section.innerHTML = "";
    for(let i = 0; i < library.length; i++)
    {
        let book = library[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<div class="card">
        <div class="card-heading">${book.title}</div>
        <div class="card-writer">${book.author}</div>
        <div class="page">${book.pages} pages</div>
        <div class="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
        </div>
        <div class="bottom-row">
            <div class="book"><img src="images/read.svg" id="book" alt="" height="50px" width="30px"></div>
            <div class="text">${book.read ? "Read":"Not read"}</div>
            <div class="trash"><img src="images/icons8-trash.svg" alt="" height="50px" width="30px"></div>
         </div>  
    </div>`
        book_section.appendChild(bookEl);
    }


function Book(title,author,pages,rating,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
    this.read = read;
}

function display(){
    let book_section = document.querySelector(".book-section");
    book_section.innerHTML = "";
    for(let i = 0; i < library.length; i++)
    {
        let book = library[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<div class="card">
        <div class="card-heading">${book.title}</div>
        <div class="card-writer">${book.author}</div>
        <div class="page">${book.pages} pages</div>
        <div class="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
        </div>
        <div class="bottom-row">
            <div class="book"><img src="images/read.svg" id="book" alt="" height="50px" width="30px"></div>
            <div class="text">${book.read ? "Read":"Not read"}</div>
            <div class="trash"><img src="images/icons8-trash.svg" alt="" height="50px" width="30px"></div>
         </div>  
    </div>`
        book_section.appendChild(bookEl);
    }
}

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let rating = document.getElementById('rating').value;
    let read = document.getElementById('yes').checked;
    let newbook = new Book(title,author,pages,rating,read);
    library.push(newbook);
    console.log(newbook);
    display();
}


const add = document.getElementById('Add');
const dialog = document.getElementById('dialog');
const close = document.getElementById('close');
const trash = document.querySelectorAll(".trash");
const to_read = document.querySelector(".book")

add.addEventListener("click", ()=>{
    dialog.showModal();
});

close.addEventListener("click", (event)=> {
    event.preventDefault();
    dialog.close();
    addBookToLibrary();
    
});

trash.addEventListener("click", ()=> {

})


