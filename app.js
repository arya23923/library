const books = ['The Kite Runner','First they killed my father','Pachinko','Silent Honor','Tea Girl of Hummingbird Lane'];
const authors = ['Khaled Hosseini','Loung Ung','Min Jin Lee','Danielle Steel','Lisa See'];
const year = [2003,2000,2017,1996,2017];
const rating = [5,4,4,5,5];

const add = document.getElementById('Add');
const dialog = document.getElementById('dialog');
const close = document.getElementById('close');

add.addEventListener("click", ()=>{
    dialog.showModal();
});

close.addEventListener("click", ()=> {
    e.preventDefault();

    let book = document.getElementById('book');
    let author = document.getElementById('author');
    let years = document.getElementById('years');
    let ratings = document.getElementById('ratings');
    let yes = document.getElementById('yes');

    let book_section = document.querySelector('book-section');
    
    dialog.close();
});

