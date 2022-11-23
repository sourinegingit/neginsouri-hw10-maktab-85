let links = document.querySelectorAll('a');
console.log(links);
function findLink(){
    for (let link of links) {
        let href = link.getAttribute('href');
        console.log(href);
        if (!href) continue; // no attribute
      
        if (!href.includes('://')) continue; // no protocol
      
        if (href.startsWith('http://internal.com')) continue; // internal
      
        link.style.color = 'orange';
      }
}
findLink();