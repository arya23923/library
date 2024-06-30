const add = document.getElementById('Add');
const dialog = document.getElementById('dialog');
const close = document.getElementById('close');

add.addEventListener("click", ()=>{
    dialog.showModal();
});

close.addEventListener("click", ()=> {
    e.preventDefault();
    dialog.close();
})