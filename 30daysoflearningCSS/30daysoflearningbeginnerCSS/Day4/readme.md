### Day 4: CSS Properties

#### **Objective:**
Learn about common CSS properties and how to apply them to style HTML elements effectively.

---

### **Key Concepts:**

1. **What are CSS Properties?**
   CSS properties are used to define specific styles for HTML elements. Each property corresponds to a specific aspect of styling, such as color, font size, margins, and more.

2. **Basic Structure of CSS Properties:**
   CSS properties follow the syntax:

   ```css
   selector {
     property: value;
   }
   ```

   - **Selector:** Targets the HTML elements to style.
   - **Property:** The specific style aspect you want to change (e.g., `color`, `font-size`).
   - **Value:** The value assigned to the property (e.g., `red`, `16px`).

3. **Common CSS Properties:**
   Here are some of the most frequently used CSS properties:

   - **Color and Background:**
     - `color`: Sets the text color.
     - `background-color`: Sets the background color of an element.
     - `background-image`: Sets an image as the background.
     - `background-size`: Defines the size of the background image.

   ```css
   p {
     color: blue;
     background-color: lightgray;
   }
   ```

   - **Text Properties:**
     - `font-family`: Specifies the font for text.
     - `font-size`: Sets the size of the text.
     - `font-weight`: Defines the thickness of the text (e.g., `normal`, `bold`).
     - `line-height`: Sets the height of each line of text.

   ```css
   h1 {
     font-family: Arial, sans-serif;
     font-size: 24px;
     font-weight: bold;
   }
   ```

   - **Box Model Properties:**
     - `margin`: Sets the outer space around an element.
     - `padding`: Sets the inner space between the element's content and its border.
     - `border`: Defines the border around an element, including style, width, and color.

   ```css
   .box {
     margin: 20px;
     padding: 15px;
     border: 1px solid #333;
   }
   ```

   - **Layout Properties:**
     - `display`: Defines how an element is displayed (e.g., `block`, `inline`, `flex`, `grid`).
     - `position`: Specifies how an element is positioned (e.g., `static`, `relative`, `absolute`, `fixed`).
     - `width` and `height`: Set the width and height of an element.

   ```css
   .container {
     display: flex;
     width: 100%;
     height: 500px;
   }
   ```

   - **Flexbox Properties:**
     - `flex-direction`: Defines the direction of flex items (e.g., `row`, `column`).
     - `justify-content`: Aligns flex items along the main axis (e.g., `center`, `space-between`).
     - `align-items`: Aligns flex items along the cross axis.

   ```css
   .flex-container {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   ```

4. **Shorthand Properties:**
   Some CSS properties have shorthand versions that allow you to set multiple related properties at once.

   - **Margin and Padding:**
     - You can set the margin and padding for all four sides (top, right, bottom, left) in one line.

   ```css
   /* margin: top right bottom left */
   margin: 10px 20px 15px 5px; /* top right bottom left */
   ```

   - **Border:**
     - You can define the width, style, and color of borders in one property.

   ```css
   border: 2px solid red;
   ```

5. **CSS Units:**
   CSS properties often use units to define values. Common units include:
   - **Pixels (`px`)**: Fixed-size unit.
   - **Percentages (`%`)**: Relative to the parent element.
   - **Ems (`em`)**: Relative to the font size of the element.
   - **Rems (`rem`)**: Relative to the font size of the root element.
   - **Viewport Units (`vw`, `vh`)**: Relative to the size of the viewport.

---

### **Example:**

Here’s an example of how to use various CSS properties to style a simple webpage:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Properties Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header>
    <h1>Welcome to CSS Properties</h1>
  </header>

  <div class="content">
    <p>This is an example paragraph to demonstrate CSS properties.</p>
    <p class="highlight">This paragraph has a highlighted background.</p>
  </div>

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

header {
  background-color: #00796b;
  color: white;
  padding: 20px;
  text-align: center;
}

.content {
  margin: 20px 0;
}

p {
  font-size: 18px;
  line-height: 1.6;
}

.highlight {
  background-color: yellow;
  padding: 10px;
  border: 1px solid #333;
}
```

In this example:
- The body has a background color and some padding.
- The header has a distinct background color and text styling.
- Paragraphs are styled with font size and line height, and one has a highlighted background with padding and a border.

---

### **Next Steps:**
Tomorrow, we will explore how to use CSS to create layouts and positioning for more complex designs.

---

### **Resources:**
- [MDN Web Docs - CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
- [W3Schools - CSS Properties](https://www.w3schools.com/cssref/default.asp)