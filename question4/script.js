let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },

    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };


let container=document.getElementById('container');

function createTree(container,obj){
    container.append(createTreeDom(obj));
}

function createTreeDom(data){
    let ul = document.createElement('ul');

      for (let key in data) {
        let li = document.createElement('li');
        li.innerHTML = key;
        let childrenUl = createTreeDom(data[key]);
        if (childrenUl) {
          li.append(childrenUl);
        }

        ul.append(li);
      }

      return ul;
    }
    createTreeDom(data);
    createTree(container,data);