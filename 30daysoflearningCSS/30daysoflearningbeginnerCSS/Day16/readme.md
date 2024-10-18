### Day 16: Pseudo-elements

#### **Objective:**
Learn about CSS pseudo-elements and how to use them to style specific parts of an element without adding extra markup.

---

### **What are Pseudo-elements?**
Pseudo-elements are keywords that allow you to style a specific part of an element. They are defined in CSS with a double colon (`::`) notation, though the single colon (`:`) notation is still supported for backward compatibility.

### **Commonly Used Pseudo-elements:**

1. **`::before`**
   - Inserts content before the content of the selected element.
   - **Example:**
     ```css
     h1::before {
       content: "Note: "; /* Inserts this text before the heading */
       color: red;
       font-weight: bold;
     }
     ```

2. **`::after`**
   - Inserts content after the content of the selected element.
   - **Example:**
     ```css
     h1::after {
       content: " ✔"; /* Adds a checkmark after the heading */
       color: green;
     }
     ```

3. **`::first-line`**
   - Targets the first line of a block of text, allowing you to style it differently.
   - **Example:**
     ```css
     p::first-line {
       font-weight: bold; /* Makes the first line of the paragraph bold */
       font-size: 1.2em; /* Increases the font size of the first line */
     }
     ```

4. **`::first-letter`**
   - Targets the first letter of a block of text for special styling.
   - **Example:**
     ```css
     p::first-letter {
       font-size: 2em; /* Enlarges the first letter */
       color: blue; /* Changes its color */
     }
     ```

5. **`::selection`**
   - Styles the portion of a document that has been highlighted by the user.
   - **Example:**
     ```css
     ::selection {
       background: yellow; /* Changes the background color of the selected text */
       color: black; /* Changes the color of the selected text */
     }
     ```

---

### **Example:**

Here’s an example demonstrating the use of various pseudo-elements:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pseudo-elements Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>Welcome to CSS Pseudo-elements</h1>
  <p>This is an example paragraph to demonstrate CSS pseudo-elements.</p>
  
</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: 'Arial', sans-serif;
  margin: 20px;
}

h1 {
  color: #333;
  position: relative; /* Needed for positioning pseudo-elements */
}

h1::before {
  content: "Note: "; /* Adds "Note: " before the heading */
  color: red;
  font-weight: bold;
}

h1::after {
  content: " ✔"; /* Adds a checkmark after the heading */
  color: green;
}

p {
  margin: 20px 0;
}

p::first-line {
  font-weight: bold; /* Bold style for the first line */
  font-size: 1.2em; /* Increase font size for the first line */
}

p::first-letter {
  font-size: 2em; /* Enlarges the first letter */
  color: blue; /* Changes the color of the first letter */
}

::selection {
  background: yellow; /* Styles selected text */
  color: black; /* Changes the color of the selected text */
}
```

In this example:
- The `h1` heading has text added before and after it using `::before` and `::after`.
- The first line of the paragraph is bold and larger.
- The first letter of the paragraph is significantly enlarged and colored.
- The `::selection` pseudo-element changes the appearance of selected text.

---

### **Next Steps:**
Tomorrow, we will explore CSS transitions and animations to create dynamic effects on web elements.

---

### **Resources:**
- [MDN Web Docs - Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [CSS Tricks - A Complete Guide to Pseudo-elements](https://css-tricks.com/almanac/selectors/pseudo-elements/)