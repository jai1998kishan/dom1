//examine the document object
//  console.dir(document);



// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.images);

//Get element by id;

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='goodbye';
// headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';
// var h2Head=document.getElementById('h1Text');
// h2Head.style.color='green';
// h2Head.style.fontWeight='bold';

//Get elements by className
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

//this will give error because list are in array
// items.style.backgroundColor='#f4f4f4';

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}

items[2].style.backgroundColor='green';
