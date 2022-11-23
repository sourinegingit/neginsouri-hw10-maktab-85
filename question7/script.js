let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.addEventListener(('click'),()=>{
    menuElem.classList.toggle('open');
    
})


