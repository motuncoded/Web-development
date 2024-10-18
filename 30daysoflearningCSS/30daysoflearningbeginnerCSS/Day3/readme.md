### Day 3: CSS Selectors

#### **Objective:**
Learn about different types of CSS selectors and how to use them to target HTML elements for styling.

---

### **Key Concepts:**

1. **What are CSS Selectors?**
   CSS selectors are patterns used to select and style HTML elements based on their attributes, type, class, ID, and other criteria. They define which elements will be affected by the CSS rules.

2. **Types of CSS Selectors:**
   There are several types of selectors in CSS, including:

   1. **Universal Selector (`*`):**
      - Selects all elements on the page.

      ```css
      * {
        margin: 0;
        padding: 0;
      }
      ```

   2. **Type Selector (Element Selector):**
      - Selects all instances of a specific HTML element.

      ```css
      p {
        color: blue;
      }
      ```

   3. **Class Selector (`.`):**
      - Selects all elements with a specific class attribute. Classes are defined with a dot (`.`) followed by the class name.

      ```css
      .highlight {
        background-color: yellow;
      }
      ```

   4. **ID Selector (`#`):**
      - Selects a single element with a specific ID attribute. IDs are defined with a hash (`#`) followed by the ID name.

      ```css
      #header {
        font-size: 24px;
      }
      ```

   5. **Attribute Selector:**
      - Selects elements based on their attributes and values.

      ```css
      input[type="text"] {
        border: 1px solid #ccc;
      }
      ```

   6. **Descendant Selector:**
      - Selects elements that are nested within another element.

      ```css
      div p {
        color: green;
      }
      ```

   7. **Child Selector (`>`):**
      - Selects elements that are direct children of a specified element.

      ```css
      ul > li {
        list-style-type: square;
      }
      ```

   8. **Adjacent Sibling Selector (`+`):**
      - Selects an element that is immediately following another element.

      ```css
      h1 + p {
        margin-top: 0;
      }
      ```

   9. **General Sibling Selector (`~`):**
      - Selects all siblings of an element that follow it.

      ```css
      h1 ~ p {
        color: gray;
      }
      ```

3. **Combining Selectors:**
   You can combine selectors to create more specific rules.

   ```css
   .nav li a {
     color: white;
   }
   ```

   In this example, the rule applies only to anchor (`<a>`) elements that are children of list items (`<li>`) inside an element with the class `.nav`.

4. **Specificity:**
   CSS selectors have a specificity hierarchy that determines which styles are applied when multiple rules target the same element. Specificity is calculated based on the types of selectors used:
   - Inline styles: Highest specificity
   - ID selectors: High specificity
   - Class, attribute, and pseudo-class selectors: Medium specificity
   - Type selectors and universal selectors: Lowest specificity

---

### **Example:**

Here's an example of how different selectors can be applied in CSS:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Selectors Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header id="header">
    <h1>CSS Selectors</h1>
  </header>

  <div class="content">
    <p class="highlight">This paragraph is highlighted.</p>
    <p>This paragraph is not highlighted.</p>
  </div>

  <ul class="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

</body>
</html>
```

**CSS (styles.css):**
```css
/* Universal Selector */
* {
  box-sizing: border-box;
}

/* Type Selector */
h1 {
  color: darkblue;
}

/* ID Selector */
#header {
  background-color: lightgray;
  padding: 20px;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* Descendant Selector */
.nav li a {
  text-decoration: none;
  color: black;
}

/* Adjacent Sibling Selector */
h1 + .content p {
  font-size: 18px;
}
```

In this example:
- The `<h1>` element is styled using the type selector.
- The header is given a background color using the ID selector.
- The first paragraph has a yellow background due to the class selector.
- The navigation links are styled using a descendant selector.

---

### **Next Steps:**
Tomorrow, we'll explore CSS properties and how to apply styles to various elements, including colors, fonts, and layouts.

---

### **Resources:**
- [MDN Web Docs - CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [W3Schools - CSS Selectors](https://www.w3schools.com/css/css_selectors.asp)