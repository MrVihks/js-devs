const menuBtn = document.querySelector('#menu');
const menu = document.querySelectorAll('#navbar')
const presentation = document.querySelector('#desc');

const names =  ["Vinicius", "Victor", "Xaropinho", "Luiz Sene"]; 
let i = 0;
setInterval(()=>{  
    if (i < names.length){ 
      presentation.style.webkitAnimationPlayState = "initial";
      presentation.innerHTML = names[i];
      i++;
    }else{
      i = 0;
    }
  },3500);

document.addEventListener('click', (e)=>{
    const el = e.target;

    if(el === menuBtn ){
        menu.style.display = 'flex';
    };
});