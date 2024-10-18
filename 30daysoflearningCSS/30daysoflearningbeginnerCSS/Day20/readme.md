### Day 20: CSS Variables

#### **Objective:**
Learn how to use CSS variables (also known as custom properties) to create maintainable and reusable styles across your web projects.

---

### **What are CSS Variables?**
CSS variables allow you to store values that can be reused throughout your stylesheet. They help in managing styles more efficiently and make it easier to update the design of your website.

### **Defining CSS Variables:**
CSS variables are defined using the `--` syntax within a selector, typically on the `:root` pseudo-class, which represents the root element of the document (usually the `<html>` element). 

**Example:**
```css
:root {
  --primary-color: #3498db; /* Define a CSS variable */
  --secondary-color: #2ecc71;
  --font-size: 16px;
}
```

### **Using CSS Variables:**
Once defined, you can use these variables with the `var()` function.

**Example:**
```css
body {
  background-color: var(--primary-color); /* Use the CSS variable */
  font-size: var(--font-size);
}

h1 {
  color: var(--secondary-color);
}
```

### **Benefits of CSS Variables:**
1. **Reusability:** You can define a color or font size once and reuse it throughout your CSS.
2. **Ease of Maintenance:** Changing the value in one place will automatically update all occurrences of that variable.
3. **Dynamic Changes:** You can change CSS variable values with JavaScript, allowing for dynamic styling.

### **Example:**

Here’s a complete example demonstrating the use of CSS variables:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Variables Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>Welcome to My Website</h1>
  <p>This paragraph uses CSS variables for styling.</p>
  <button class="change-theme">Change Theme</button>

  <script src="script.js"></script>
</body>
</html>
```

**CSS (styles.css):**
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
  --background-color: #ffffff;
  --text-color: #333333;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-size);
  margin: 20px;
  transition: background-color 0.3s ease; /* Smooth transition */
}

h1 {
  color: var(--primary-color);
}

button {
  padding: 10px 15px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen; /* Change on hover */
}
```

**JavaScript (script.js):**
```javascript
const button = document.querySelector('.change-theme');
button.addEventListener('click', () => {
  document.documentElement.style.setProperty('--background-color', '#34495e'); // Change background color
  document.documentElement.style.setProperty('--text-color', '#ecf0f1'); // Change text color
  document.documentElement.style.setProperty('--primary-color', '#e74c3c'); // Change primary color
  document.documentElement.style.setProperty('--secondary-color', '#f1c40f'); // Change secondary color
});
```

### **In this example:**
- CSS variables are defined for colors and font sizes.
- The button uses these variables for its background color.
- The JavaScript function changes the values of the CSS variables when the button is clicked, allowing for dynamic theming.

---

### **Next Steps:**
Tomorrow, we will explore advanced CSS techniques, including using CSS Grid for complex layouts.

---

### **Resources:**
- [MDN Web Docs - Using CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var)
- [CSS Tricks - CSS Variables](https://css-tricks.com/css-variables/)

Feel free to ask if you have any questions or need further examples!