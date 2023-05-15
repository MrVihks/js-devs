const menuBtn = document.querySelector('#menu');
const menu = document.querySelectorAll('#navbar')

document.addEventListener('click', (e)=>{
    const el = e.target;

    if(el === menuBtn ){
        menu.style.display = 'flex';
    };
});