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
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='goodbye';
// headerTitle.innerHTML='<h3>Hello</h3>';
header.style.borderBottom='solid 3px #000';
var h2Head=document.getElementById('h1Text');
h2Head.style.color='green';
h2Head.style.fontWeight='bold';