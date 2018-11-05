// index.js

// let paragraph = document.getElementById('paragraph');
// let links = document.getElementsByClassName('link');
// let divs = document.getElementsByTagName('div');

// let attribute = element.getAttribute(attributeName);
//index.js

// paragraph = document.getElementById('paragraph');
// let paragraphId = paragraph.getAttribute('id');
// console.log(paragraphId); //=> "paragraph"

paragraph = document.getElementById('paragraph');
paragraph.setAttribute('id', 'info-paragraph');

let googleLink = document.getElementById('google-link');
let googleLinkId = googleLink.getAttribute('href');
console.log(googleLinkId);
googleLinkId.setAttribute('href', 'http://www.google.com');