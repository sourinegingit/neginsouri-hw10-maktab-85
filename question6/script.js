let hidden=document.getElementById('hider');
hidden.addEventListener(('click'),()=>{
    // document.getElementById('text').remove();
    document.getElementById('text').hidden = true;
setTimeout(() => {
    hidden.hidden=true;
}, 1000);
})