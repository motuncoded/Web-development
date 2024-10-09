# Day 29: HTML and JavaScript Integration

JavaScript is the scripting language that allows you to add interactivity, control behavior, and manipulate elements on your HTML page. Today, we’ll explore how to integrate JavaScript with HTML to create dynamic and responsive web pages.

## 1. Adding JavaScript to HTML

You can include JavaScript in your HTML file in several ways:

### a. Inline JavaScript

You can add JavaScript directly into an HTML element’s attribute, such as onclick, onmouseover, or any other event handler.

Example:

```html
Copy code <button onclick="alert('Button clicked!')">Click me</button>
```

When you click the button, it triggers an alert box.

### b. Internal JavaScript

You can also write JavaScript within the `<script>` tag inside the HTML file, typically placed in the `<head>` or before the closing `</body>` tag.

Example:

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <title>JavaScript Integration</title>
    <script>
      function showMessage() {
        alert("Hello from JavaScript!");
      }
    </script>
  </head>
  <body>
    <button onclick="showMessage()">Click me</button>
  </body>
</html>
```

This example defines a JavaScript function showMessage() that gets triggered when the button is clicked.

### c. External JavaScript

To keep your HTML and JavaScript separate, it's common to place JavaScript in an external file. You link to it using the `<script>` tag with a src attribute.

HTML:

```html
Copy code

<!doctype html>
<html lang="en">
  <head>
    <title>External JavaScript</title>
    <script src="script.js"></script>
  </head>
  <body>
    <button onclick="showMessage()">Click me</button>
  </body>
</html>
```

External JavaScript (script.js):

```javascript
Copy code
function showMessage() {
  alert('Hello from an external JavaScript file!');
}
```

This method keeps your HTML clean and makes your JavaScript reusable across multiple HTML pages.

## 2. Manipulating HTML Elements with JavaScript

JavaScript can dynamically change the content, style, and attributes of HTML elements. The Document Object Model (DOM) allows JavaScript to interact with HTML elements as objects.

a. Changing Content
You can use document.getElementById() to select an HTML element by its id and change its content using .innerHTML.

Example:

```html
Copy code

<!doctype html>
<html lang="en">
  <head>
    <title>Change Content</title>
    <script>
      function changeText() {
        document.getElementById("message").innerHTML = "Text changed!";
      }
    </script>
  </head>
  <body>
    <p id="message">Original text</p>
    <button onclick="changeText()">Change Text</button>
  </body>
</html>
```

### b. Changing Styles

You can also manipulate CSS styles of elements using .style.

Example:

```html
Copy code

<!doctype html>
<html lang="en">
  <head>
    <title>Change Style</title>
    <script>
      function changeStyle() {
        document.getElementById("box").style.backgroundColor = "blue";
      }
    </script>
  </head>
  <body>
    <div
      id="box"
      style="width: 100px; height: 100px; background-color: red;"
    ></div>
    <button onclick="changeStyle()">Change Color</button>
  </body>
</html>
```

This changes the color of the div with the id="box" from red to blue.

## 3. Event Handling in JavaScript

JavaScript can respond to user actions like clicks, key presses, and mouse movements by attaching event listeners to HTML elements.

a. Example: Click Event Listener

````html
Copy code

<!doctype html>
<html lang="en">
  <head>
    <title>Event Handling</title>
    <script>
      function handleClick() {
        alert("Button was clicked!");
      }
    </script>
  </head>
  <body>
    <button onclick="handleClick()">Click me</button>
  </body>
</html>
`` b. Example: Key Press Event ```html Copy code
<!doctype html>
<html lang="en">
  <head>
    <title>Key Event</title>
    <script>
      function logKeyPress(event) {
        console.log("Key pressed: " + event.key);
      }
    </script>
  </head>
  <body onkeypress="logKeyPress(event)">
    <p>Press any key and check the console.</p>
  </body>
</html>
````

In this example, when a key is pressed, the event is logged to the browser console.

## 4. DOM Manipulation with JavaScript

JavaScript can be used to create, delete, or modify HTML elements dynamically. Some common methods for manipulating the DOM include:

- document.createElement(): Creates a new HTML element.
- document.appendChild(): Adds a new child element to an existing element.
- element.remove(): Removes an element from the DOM.

Example: Adding a New Element

```html
Copy code

<!doctype html>
<html lang="en">
  <head>
    <title>DOM Manipulation</title>
    <script>
      function addElement() {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "This is a new paragraph!";
        document.body.appendChild(newParagraph);
      }
    </script>
  </head>
  <body>
    <button onclick="addElement()">Add Paragraph</button>
  </body>
</html>
```

## 5. Best Practices for HTML and JavaScript Integration

- Keep your JavaScript separate: It's a good practice to keep your JavaScript in external files (.js), especially for large projects.
- Defer or async loading: Use the defer or async attribute for external script tags to prevent JavaScript from blocking the loading of HTML content.
- Minimize inline JavaScript: Try to avoid using inline event handlers like onclick. Instead, use addEventListener() for better separation of concerns and flexibility.
