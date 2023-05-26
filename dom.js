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
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

// //this will give error because list are in array
// // items.style.backgroundColor='#f4f4f4';

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// items[2].style.backgroundColor='green';


//Get element by tagName:

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// for(var i=0;i<li.length;i++){
//         li[i].style.backgroundColor='#f4f4f4';
//     }


//query Selector;
// var header = document.querySelector('#main-header');
// console.log(header);
// header.style.borderBottom = 'solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello world!';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='orange';


//query selectorAll

var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';   //there is two titles class in our html code


var secondList=document.querySelectorAll('.list-group-item');
secondList[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.background='green';
    even[i].style.background='#ccc';
}

