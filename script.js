// index.js

// let paragraph = document.getElementById('paragraph');
// let links = document.getElementsByClassName('link');
// let divs = document.getElementsByTagName('div');

// let attribute = element.getAttribute(attributeName);
//index.js

// paragraph = document.getElementById('paragraph');
// let paragraphId = paragraph.getAttribute('id');
// console.log(paragraphId); //=> "paragraph"

// paragraph = document.getElementById('paragraph');
// paragraph.setAttribute('id', 'info-paragraph');

// let link = document.getElementById("a");
// link.setAttribute("href", 'http://www.google.com');

// let link = document.querySelector("a");
// link.setAttribute("href", "http://www.google.com");
// link.setAttribute('target', '_blank');
// link.removeAttribute('target');

// paragraph.removeAttribute('id');
// paragraph.setAttribute('class', 'paragraph');

// let divs = document.getElementById('content');
// divs.removeAttribute('id');
// divs.setAttribute('class', 'divsOne');

// let divs = document.getElementByClass('class');
// divs.removeAttribute('class');
// divs.removeAttribute('id');
// let divsTwo = document.getElementByClass('class')
// divsTwo.removeAttribute('class');

// let element = document.getElementById('paragraph');
// element.innerHTML = "elephant";

// let parent = document.getElementsByTagName('body')[0]
// parent.appendChild(element); - removes above elephant

// let content = document.getElementById('google-link');
// let text = document.createTextNode(content);
// text = document.createTextNode('this text created dynamically');
// console.log(text);

// let parent = document.getElementById('parent');
// let firstChild = document.getElementById('first-child');
// let pTag = document.createElement('p');
// let text = document.createTextNode('this text created dynamically');

// pTag.appenChild(text);
// parent.insertBefore(pTag, firstChild);

// let contentDiv = document.getElementById('content');

// let clearBody = document.getElementsByTagName('body');
// clearBody.innerHTML = "";

// let button = document.getElementById("add-item-button");

// button.onclick = function(){
//   console.log("add an element to the list");
// }

let button2 = document.getElementById("add-item-button");

button2.onclick = function(){
  let text = document.createElement("li");
  let node = document.createTextNode`J${item number} + item number`;
  text.appendChild(node);
  button.appendChild(node);
}
