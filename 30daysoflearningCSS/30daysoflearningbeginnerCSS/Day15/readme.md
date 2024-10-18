### Day 15: Pseudo-classes

#### **Objective:**
Learn about CSS pseudo-classes and how to use them to style elements based on their state or position in the document.

---

### **What are Pseudo-classes?**
Pseudo-classes are special keywords added to selectors that specify a special state of the selected elements. They allow you to style elements based on user interaction, their position in the document, or other conditions.

### **Commonly Used Pseudo-classes:**

1. **`:hover`**
   - Applies styles when the user hovers over an element.
   - **Example:**
     ```css
     a:hover {
       color: blue; /* Change text color to blue on hover */
       text-decoration: underline; /* Underline the link on hover */
     }
     ```

2. **`:focus`**
   - Applies styles when an element (like an input field) is focused.
   - **Example:**
     ```css
     input:focus {
       border-color: green; /* Change border color when the input is focused */
       outline: none; /* Remove default outline */
     }
     ```

3. **`:active`**
   - Applies styles when an element is being activated (e.g., when a button is pressed).
   - **Example:**
     ```css
     button:active {
       background-color: red; /* Change background color when button is pressed */
     }
     ```

4. **`:nth-child(n)`**
   - Selects elements based on their position in a parent. The `n` can be a number, keyword, or formula.
   - **Example:**
     ```css
     li:nth-child(odd) {
       background-color: #f0f0f0; /* Style odd list items */
     }
     ```

5. **`:first-child` and `:last-child`**
   - Selects the first or last child element within a parent.
   - **Example:**
     ```css
     p:first-child {
       font-weight: bold; /* Make the first paragraph bold */
     }

     p:last-child {
       margin-bottom: 0; /* Remove bottom margin from the last paragraph */
     }
     ```

6. **`:disabled`**
   - Selects disabled elements (like buttons or input fields).
   - **Example:**
     ```css
     button:disabled {
       background-color: gray; /* Style disabled button */
       cursor: not-allowed; /* Change cursor style */
     }
     ```

---

### **Example:**

Here’s an example demonstrating the use of various pseudo-classes:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pseudo-classes Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>

  <button>Click Me</button>
  <input type="text" placeholder="Type here..." />

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: 'Arial', sans-serif;
  margin: 20px;
}

ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0;
}

li {
  padding: 10px;
  background-color: #e0e0e0;
  margin: 5px 0;
  transition: background-color 0.3s; /* Smooth transition */
}

li:hover {
  background-color: #c0c0c0; /* Change background color on hover */
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition */
}

button:hover {
  background-color: #0056b3; /* Change background color on hover */
}

button:active {
  background-color: red; /* Change background color when pressed */
}

input:focus {
  border: 2px solid green; /* Change border color when focused */
}
```

In this example:
- List items change their background color when hovered over.
- The button changes color when hovered and again when it is actively being clicked.
- The input field changes its border color when focused.

---

### **Next Steps:**
Tomorrow, we will explore CSS pseudo-elements, which allow you to style specific parts of an element.

---

### **Resources:**
- [MDN Web Docs - Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS Tricks - A Complete Guide to Pseudo-classes](https://css-tricks.com/almanac/selectors/pseudo-classes/)