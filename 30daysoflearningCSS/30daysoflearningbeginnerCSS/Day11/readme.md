### Day 11: Grid Properties

#### **Objective:**
Learn about the specific properties available in CSS Grid Layout that allow you to control the structure, size, and alignment of grid items and the grid container itself.

---

### **Key Grid Properties:**

1. **Grid Container Properties:**
   These properties are applied to the grid container to define its layout and behavior.

   - **`display: grid;`**: Establishes a grid container and enables grid layout.
   - **`grid-template-columns`**: Defines the number and size of the columns in the grid.
     - **Example:**
       ```css
       .grid-container {
         display: grid;
         grid-template-columns: 100px 200px 1fr; /* 3 columns of different sizes */
       }
       ```

   - **`grid-template-rows`**: Defines the number and size of the rows in the grid.
     - **Example:**
       ```css
       .grid-container {
         grid-template-rows: auto 50px; /* 2 rows with the first row's height set to auto */
       }
       ```

   - **`grid-template-areas`**: Defines a grid template by referencing the names of the grid areas. It allows you to create a visual layout using string syntax.
     - **Example:**
       ```css
       .grid-container {
         grid-template-areas: 
           "header header header"
           "sidebar content main"
           "footer footer footer";
       }
       ```

   - **`grid-gap`**: Defines the gaps (gutters) between rows and columns in the grid. Can be specified for rows and columns separately using `row-gap` and `column-gap`.
     - **Example:**
       ```css
       .grid-container {
         grid-gap: 20px; /* 20px gap between rows and columns */
       }
       ```

   - **`justify-items`**: Aligns grid items along the row (inline) axis.
     - Values: `start`, `end`, `center`, `stretch`.
     - **Example:**
       ```css
       .grid-container {
         justify-items: center; /* Centers items horizontally */
       }
       ```

   - **`align-items`**: Aligns grid items along the column (block) axis.
     - Values: `start`, `end`, `center`, `baseline`, `stretch`.
     - **Example:**
       ```css
       .grid-container {
         align-items: stretch; /* Stretches items to fill the grid area */
       }
       ```

   - **`justify-content`**: Aligns the grid as a whole along the row (inline) axis.
     - Values: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`.
     - **Example:**
       ```css
       .grid-container {
         justify-content: space-between; /* Distributes space between grid items */
       }
       ```

   - **`align-content`**: Aligns the grid as a whole along the column (block) axis.
     - Values: `start`, `end`, `center`, `space-between`, `space-around`, `stretch`.
     - **Example:**
       ```css
       .grid-container {
         align-content: center; /* Centers the grid vertically */
       }
       ```

2. **Grid Item Properties:**
   These properties are applied to individual grid items to control their placement and sizing within the grid.

   - **`grid-column`**: A shorthand property to specify which columns a grid item should occupy.
     - **Example:**
       ```css
       .grid-item {
         grid-column: 1 / 3; /* Occupies columns 1 and 2 */
       }
       ```

   - **`grid-row`**: A shorthand property to specify which rows a grid item should occupy.
     - **Example:**
       ```css
       .grid-item {
         grid-row: 1 / 2; /* Occupies the first row */
       }
       ```

   - **`grid-area`**: Specifies a grid item’s size and location within the grid by defining a grid area.
     - **Example:**
       ```css
       .grid-item {
         grid-area: header; /* Refers to an area defined in grid-template-areas */
       }
       ```

   - **`min-width`**, **`max-width`**, **`min-height`**, **`max-height`**: Control the minimum and maximum sizes of grid items.
     - **Example:**
       ```css
       .grid-item {
         min-width: 100px; /* Minimum width of 100px */
         max-height: 300px; /* Maximum height of 300px */
       }
       ```

---

### **Example:**

Here’s an example demonstrating various grid properties in action:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Properties Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="grid-container">
    <div class="grid-item header">Header</div>
    <div class="grid-item sidebar">Sidebar</div>
    <div class="grid-item content">Content</div>
    <div class="grid-item main">Main</div>
    <div class="grid-item footer">Footer</div>
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
  display: grid;
  grid-template-columns: 1fr 3fr; /* Two columns, with the second one wider */
  grid-template-rows: auto 1fr auto; /* Three rows: auto height for header and footer, flexible content area */
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  grid-gap: 20px; /* Adds spacing between items */
}

.grid-item {
  background-color: #fff; /* White background for items */
  padding: 20px;
  text-align: center; /* Centers text within the item */
  border-radius: 5px; /* Rounds corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds shadow effect */
}

.header {
  grid-area: header; /* Positions in the header area */
}

.sidebar {
  grid-area: sidebar; /* Positions in the sidebar area */
}

.content {
  grid-area: content; /* Positions in the content area */
}

.footer {
  grid-area: footer; /* Positions in the footer area */
}
```

In this example:
- A grid container is created with two columns and three rows.
- Named areas are used to place items (header, sidebar, content, footer) in specific grid areas, enhancing the layout's clarity and structure.

---

### **Next Steps:**
Tomorrow, we will delve into advanced techniques for creating responsive grid layouts, including media queries and grid adjustments.

---

### **Resources:**
- [MDN Web Docs - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)