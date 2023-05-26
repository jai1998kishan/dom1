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

// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';   //there is two titles class in our html code


// var secondList=document.querySelectorAll('.list-group-item');
// secondList[1].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.background='green';
//     even[i].style.background='#ccc';
// }



//Traversing the DOM
// var itemList=document.querySelector('#items');



//paranthode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);  //output will be null


//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);   //in the output the 'text' node is present because of space betwwen li;  that's why we don't use childNode

// console.log(itemList.children);    //use children 
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';


// //firstChild
// // console.log(itemList.firstChild);   //first child is useless beacuse it show include space in the array; don't use firstchild

//firstElementChild
// console.log(itemList.firstElementChild);   // use firstElementChild
// itemList.firstElementChild.textContent='Hello 1';


//lastChild
// console.log(itemList.lastChild);    //this is also showing as text node first whch is space show don't use this one also

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

//nextSibling
// console.log(itemList.nextSibling);   //this is also show as text node show don't use that also

//nextElementSibling
// console.log(itemList.nextElementSibling);  //the output is null because we don't have any sibling in our code after the list; if we uncomment the span than the next sibling will be span:


//previousSibling
// console.log(itemList.previousSibling);  //output will be text node dont use that also

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='orange';



//createElement

//create a div
var newDiv=document.createElement('div');

// //add class
newDiv.className='hello';
// //add id
newDiv.id='hello1';
// //add attr
newDiv.setAttribute('title','Hello Div');

// //create text node
var newDivText=document.createTextNode('HEllo');

// ////add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);


var newPar=document.createElement('li');
var newParText=document.createTextNode('HEllo');
newPar.appendChild(newParText);
var container2=document.querySelector('#items');
var ul=document.querySelector('.list-group-item');

console.log(newPar);

container2.insertBefore(newPar,ul);





