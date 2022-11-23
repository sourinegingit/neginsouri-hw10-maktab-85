let table=document.getElementById('age-table');
// console.log(table);


// second
// table.getElementsByTagName('lable');
const lable=document.querySelectorAll('#age-table label');
console.log(lable);

// third
// let td=table.rows[0].cells[0];
// console.log(td.innerHTML);
let tdAge=table.querySelector('td');
console.log(tdAge.innerHTML);

// four

let form=document.querySelector('form[name="search"]');
console.log(form);


// five
let input=form.getElementsByTagName('input')[0];
console.log(input);


// six

let inputs = form.querySelectorAll('input');
inputs[inputs.length-1];
console.log(inputs);