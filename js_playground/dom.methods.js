// document.querySelector() - returns the first element that matches a given CSS-style selector such as <div> or <p>
const p = document.querySelector('p');

// document.querySelectorAll() - returns a NodeList of all elements that match a given CSS-style selector such as <div> or <p>
const divs = document.querySelectorAll('div');

// document.getElementById() - returns the element with the given ID such as <div id="header" />
const header = document.getElementById('header');

// document.getElementsByClassName() - returns a NodeList of all elements that match a given class name such as <p class="special" />
const special = document.getElementsByClassName('special');

// document.getElementsByTagName() - returns a NodeList of all elements that match a given tag name such as <div> or <p>
const divTags = document.getElementsByTagName('div');

// document.getElementsByName() - returns a NodeList of all elements that match a given name attribute such as <input name="name" />
const nameTags = document.getElementsByName('name');

// document.createElement() - creates a new element with the given tag name such as <div> or <p>
const newDiv = document.createElement('div');

// document.createTextNode() - creates a new text node with the given text
const newText = document.createTextNode('Hello World');
// q: is text node the same as textContent?
// a: no, textContent is a property of an element node that returns the text content of the element. While text node is a node that contains text.

// document.appendChild() - appends a child node to the end of the list of children of a specified parent node
const parent = document.querySelector('div');
const child = document.createElement('p');
parent.appendChild(child);

// document.removeChild() - removes a child node from the DOM and returns the removed node
const removed = parent.removeChild(child);

// document.replaceChild() - replaces a child node within the DOM and returns the replaced node
const newChild = document.createElement('p');
const replaced = parent.replaceChild(newChild, child);

// document.insertBefore() - inserts a node before a reference node as a child of a specified parent node
const reference = document.querySelector('p');
const inserted = parent.insertBefore(newChild, reference);

// document.cloneNode() - clones a node and returns the cloned node
const clone = parent.cloneNode(true);

// document.hasChildNodes() - returns a boolean indicating whether a node has any child nodes
const hasChildren = parent.hasChildNodes();

// document.normalize() - merges adjacent text nodes and removes empty text nodes in an element
parent.normalize();

// document.isEqualNode() - returns a boolean indicating whether two nodes are equal
const isEqual = parent.isEqualNode(newChild);

// document.isSameNode() - returns a boolean indicating whether two nodes are the same
const isSame = parent.isSameNode(newChild);