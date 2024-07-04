// const library = [
//     {
//         title: 'The Kite Runner',
//         author: 'Khaled Hosseini',
//         pages: 371,
//         rating: 5
//     },
//     {
//         title: 'First they killed my father',
//         author: 'Loung Ung',
//         pages: 238,
//         rating: 4
//     },
//     {
//         title: 'Pachinko',
//         author: 'Min Jin Lee',
//         pages: 490,
//         rating: 5
//     },
//     {
//         title: 'Silent Honor',
//         author: 'Danielle Steel',
//         pages: 353,
//         rating: 5
//     },
//     {
//         title: 'Tea Girl of Hummingbird Lane',
//         author: 'Lisa See',
//         pages: 384,
//         rating: 5
//     }
// ]

// function Book(title,author,pages,rating){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.rating = rating;
// }

// function addBookToLibrary(book){
//     library.push(book);
// }

// let new_card = document.createElement('div class = card');


const add = document.getElementById('Add');
const dialog = document.getElementById('dialog');
const close = document.getElementById('close');

add.addEventListener("click", ()=>{
    dialog.showModal();
});

close.addEventListener("click", (event)=> {
    event.preventDefault();
    dialog.close();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let rating = document.getElementById('rating');

    let new_card = document.createElement('div class = card');
    let card_heading = document.createElement('div class = card_heading');
    let card_writer = document.createElement('div class = writer');
    let page = document.createElement('div class = page');
    let ratings = document.createElement('div class = rating');

    card_heading.innerText = title.value;
    card_writer.innerText = author.value;
    page.innerText = pages.value+" pages";
    ratings.innerText = rating.value;

    new_card.appendChild(card_heading);
    new_card.appendChild(card_writer);
    new_card.appendChild(page);
    new_card.appendChild(ratings);

    let book_section = document.getElementsByClassName('book-section').classList;
    book_section.add("card");
    book_section.appendChild(new_card);

    
});

