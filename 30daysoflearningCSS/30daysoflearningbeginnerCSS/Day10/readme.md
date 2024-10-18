### Day 10: Grid Layout Basics

#### **Objective:**
Understand the fundamentals of CSS Grid Layout, a powerful tool for creating complex and responsive web layouts using a grid-based approach.

---

### **Key Concepts:**

1. **What is CSS Grid Layout?**
   CSS Grid Layout is a two-dimensional layout system that allows you to create complex layouts using rows and columns. It provides precise control over the placement of elements within a defined grid structure.

2. **Grid Container and Grid Items:**
   - **Grid Container:** The element that has `display: grid;` or `display: inline-grid;`. It establishes a grid formatting context for its direct children (the grid items).
   - **Grid Items:** The direct children of the grid container that can be placed into the grid.

   **Example:**
   ```css
   .grid-container {
     display: grid; /* Creates a grid container */
   }
   ```

3. **Defining Rows and Columns:**
   You can define the number of rows and columns in a grid using the `grid-template-rows` and `grid-template-columns` properties.

   - **`grid-template-columns`**: Defines the size of the columns in the grid.
   - **`grid-template-rows`**: Defines the size of the rows in the grid.

   **Example:**
   ```css
   .grid-container {
     display: grid;
     grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
     grid-template-rows: 100px 200px; /* 2 rows with specific heights */
   }
   ```

4. **Grid Item Placement:**
   You can control where items are placed in the grid using `grid-column` and `grid-row` properties.

   - **`grid-column-start`** and **`grid-column-end`**: Specify the starting and ending column lines for an item.
   - **`grid-row-start`** and **`grid-row-end`**: Specify the starting and ending row lines for an item.
   - **Shorthand:** You can use `grid-column` and `grid-row` as shorthand.

   **Example:**
   ```css
   .grid-item {
     grid-column: 1 / 3; /* Spans from column 1 to column 3 */
     grid-row: 1; /* Occupies the first row */
   }
   ```

5. **Grid Gaps:**
   The `grid-gap` property (or its shorthand properties `row-gap` and `column-gap`) controls the spacing between grid items.

   **Example:**
   ```css
   .grid-container {
     grid-gap: 10px; /* Adds 10px spacing between grid items */
   }
   ```

---

### **Example:**

Here’s an example demonstrating how to use CSS Grid Layout:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Layout Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
    <div class="grid-item">Item 5</div>
    <div class="grid-item">Item 6</div>
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

.grid-container {
  display: grid; /* Creates a grid container */
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  grid-gap: 10px; /* Adds spacing between items */
}

.grid-item {
  background-color: #fff; /* White background for items */
  padding: 20px;
  text-align: center; /* Centers text within the item */
  border-radius: 5px; /* Rounds corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds shadow effect */
}
```

In this example:
- A grid container is created with three equal columns.
- Six grid items are placed in the grid, with a 10px gap between them.
- Each item has a white background with rounded corners and a shadow effect for emphasis.

---

### **Next Steps:**
Tomorrow, we will explore more advanced Grid Layout techniques, including grid area and responsive grid designs.

---

### **Resources:**
- [MDN Web Docs - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)