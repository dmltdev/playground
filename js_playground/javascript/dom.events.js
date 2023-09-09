// DOM Events

// Event Listener
// Event Listener is a function that waits for an event to occur
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("You clicked me!");
});

// Event Handler
// Event Handler is a function that is called when an event occurs
const button2 = document.querySelector("button");
button2.onclick = function () {
  console.log("You clicked me!");
};

// Event Object
// Event Object is an object that is passed to the event handler
const button3 = document.querySelector("button");
button3.addEventListener("click", (e) => {
  console.log(e);
});

// Event Bubbling
// Event Bubbling is when an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// Event Capturing
// Event Capturing is when an event occurs on an element, it first runs the handlers on it, then on its children, then all the way down on other descendants.

// Event Delegation
// Event Delegation is a way to avoid adding event listeners to specific nodes; instead the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.

// Event Propagation
// Event Propagation is the process of propagating an event to its parent element.

// Event Target
// Event Target is the element that triggered the event.

// Event Type
// Event Type is the type of event that occurred.
