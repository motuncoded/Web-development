### Day 14: CSS Units

#### **Objective:**
Understand the different types of units in CSS and learn how to use them effectively for responsive design and layout.

---

### **Types of CSS Units:**

1. **Absolute Units:**
   - These units are fixed and do not change based on other elements or the viewport size.
   - **Common Absolute Units:**
     - `px` (pixels): The most commonly used unit. Represents a fixed number of pixels on the screen.
     - `pt` (points): Traditionally used in print media. One point is equal to 1/72 of an inch.
     - `cm` (centimeters): Useful for print layouts, but not commonly used in web design.
     - `mm` (millimeters): Similar to centimeters, primarily used for print.

   **Example:**
   ```css
   .fixed-size {
     width: 300px; /* Fixed width of 300 pixels */
     height: 150pt; /* Height of 150 points */
   }
   ```

2. **Relative Units:**
   - These units are relative to another measurement, making them more flexible and adaptable to different screen sizes and resolutions.
   - **Common Relative Units:**
     - `%` (percent): Represents a percentage of the parent element's size.
     - `em`: Relative to the font size of the element itself. If the font size is `16px`, `1em` equals `16px`.
     - `rem` (root em): Relative to the font size of the root element (`html`). If the root font size is `16px`, `1rem` equals `16px`.
     - `vw` (viewport width): 1% of the width of the viewport. `100vw` equals the full width of the viewport.
     - `vh` (viewport height): 1% of the height of the viewport. `100vh` equals the full height of the viewport.

   **Example:**
   ```css
   .responsive-size {
     width: 50%; /* 50% of the parent element's width */
     font-size: 1.5em; /* 1.5 times the font size of the element itself */
     padding: 2rem; /* 2 times the font size of the root element */
   }
   ```

3. **Viewport Units:**
   - These units are specifically designed for responsive web design and are relative to the size of the viewport.
   - **Common Viewport Units:**
     - `vw`: 1% of the viewport's width.
     - `vh`: 1% of the viewport's height.
     - `vmin`: The smaller value of either `vw` or `vh`.
     - `vmax`: The larger value of either `vw` or `vh`.

   **Example:**
   ```css
   .full-screen {
     width: 100vw; /* Full width of the viewport */
     height: 100vh; /* Full height of the viewport */
   }
   ```

---

### **Example:**

Here’s an example that demonstrates the use of different CSS units in a responsive layout:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Units Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="container">
    <div class="box absolute-unit">Absolute Unit (300px)</div>
    <div class="box relative-unit">Relative Unit (50%)</div>
    <div class="box viewport-unit">Viewport Unit (100vh)</div>
  </div>

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between boxes */
}

.box {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
}

.absolute-unit {
  width: 300px; /* Fixed width */
}

.relative-unit {
  width: 50%; /* 50% of the parent element's width */
}

.viewport-unit {
  width: 100%; /* Full width */
  height: 100vh; /* Full height of the viewport */
}
```

In this example:
- The first box has a fixed width of 300 pixels.
- The second box takes up 50% of the container's width.
- The third box takes up the full width of the viewport and its height is set to the full viewport height.

---

### **Next Steps:**
Tomorrow, we will explore how to create responsive typography using various CSS units.

---

### **Resources:**
- [MDN Web Docs - CSS Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS Tricks - A Complete Guide to CSS Units](https://css-tricks.com/complete-guide-css-units/)