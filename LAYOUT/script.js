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

// collapse (nav-toggle)
let collapseBtns = document.querySelectorAll('.collapse-btn');
for(collapseBtn of collapseBtns){
    collapseBtn.onclick = e => {
        let panel = e.target.nextElementSibling;
        console.log(e.target);
        panel.classList.toggle('active');

        if(panel.style.height){
            panel.style.height = null;
        }else{
            panel.style.height = panel.scrollHeight + 'px';
        }
    }
}

// 取得視窗寬度

let bodyWidth = document.body.clientWidth;
let htmlWidth = document.documentElement.clientWidth;
console.log(bodyWidth);
console.log(htmlWidth);
// let windowWidth = window.innerWidth;
// console.log(windowWidth);

window.onresize = e => {
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
}