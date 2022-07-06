// Modal
let modalBtns = document.querySelectorAll('.modal-btn');
for(modalBtn of modalBtns){
    modalBtn.onclick = e => {
        let modal = e.target.dataset.target;
        document.querySelector(modal).classList.add('active');
        e.preventDefault();
    }
}

let close = document.querySelectorAll('.modal-close');
for(c of close){
    c.onclick = e => {
        document.querySelector('.modal.active').classList.remove('active');
        e.preventDefault();
    }
}