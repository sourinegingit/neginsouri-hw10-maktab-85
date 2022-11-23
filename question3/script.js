let ul=document.getElementById('ul');


// DocumentFragment is a special DOM node that serves as a wrapper to pass around lists of nodes.

// We can append other nodes to it, but when we insert it somewhere, then its content is inserted instead.
function creatList() {
    let fragment = new DocumentFragment();
  
    while (true) {
        let userInfo = prompt("Enter the text for the list item", "");
  
        if (!userInfo) {
          break;
        }
  
        let list = document.createElement('li');
        list.textContent = userInfo;
        ul.append(list);
  }
  return fragment()
}
  
  ul.append(creatList());