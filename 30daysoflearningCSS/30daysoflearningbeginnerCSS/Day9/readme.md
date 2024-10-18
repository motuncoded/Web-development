### Day 9: Flexbox Properties

#### **Objective:**
Learn about specific properties in the Flexbox model that control the layout and alignment of flex items, enabling you to create complex and responsive designs.

---

### **Key Flexbox Properties:**

1. **Flex Container Properties:**
   These properties are applied to the flex container, affecting the layout of its flex items.

   - **`flex-direction`**: Determines the direction in which flex items are placed in the flex container.
     - Values: `row`, `row-reverse`, `column`, `column-reverse`.
     - **Example:**
       ```css
       .flex-container {
         display: flex;
         flex-direction: row; /* Default value */
       }
       ```

   - **`flex-wrap`**: Defines whether flex items should wrap onto multiple lines or not.
     - Values: `nowrap`, `wrap`, `wrap-reverse`.
     - **Example:**
       ```css
       .flex-container {
         flex-wrap: wrap; /* Allows items to wrap onto multiple lines */
       }
       ```

   - **`flex-flow`**: A shorthand property for `flex-direction` and `flex-wrap`.
     - **Example:**
       ```css
       .flex-container {
         flex-flow: row wrap; /* Same as flex-direction: row; flex-wrap: wrap; */
       }
       ```

   - **`justify-content`**: Aligns flex items along the main axis.
     - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
     - **Example:**
       ```css
       .flex-container {
         justify-content: space-between; /* Distributes items with space between them */
       }
       ```

   - **`align-items`**: Aligns flex items along the cross axis.
     - Values: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
     - **Example:**
       ```css
       .flex-container {
         align-items: center; /* Centers items vertically */
       }
       ```

   - **`align-content`**: Aligns flex lines (if there are multiple lines) along the cross axis.
     - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.
     - **Example:**
       ```css
       .flex-container {
         align-content: space-around; /* Distributes lines with space around them */
       }
       ```

2. **Flex Item Properties:**
   These properties are applied to flex items, affecting their size and alignment within the flex container.

   - **`flex-grow`**: Defines the ability of a flex item to grow if necessary.
     - Default value is `0` (it won’t grow). A value of `1` means it will take up available space.
     - **Example:**
       ```css
       .flex-item {
         flex-grow: 1; /* Allows the item to grow to fill available space */
       }
       ```

   - **`flex-shrink`**: Defines the ability of a flex item to shrink if necessary.
     - Default value is `1`. A value of `0` means it won’t shrink.
     - **Example:**
       ```css
       .flex-item {
         flex-shrink: 0; /* Prevents the item from shrinking */
       }
       ```

   - **`flex-basis`**: Defines the default size of a flex item before space distribution occurs.
     - Can be set using pixels, percentages, or other CSS units (like `auto`).
     - **Example:**
       ```css
       .flex-item {
         flex-basis: 200px; /* Sets the item’s base size */
       }
       ```

   - **`flex`**: A shorthand property that combines `flex-grow`, `flex-shrink`, and `flex-basis`.
     - **Example:**
       ```css
       .flex-item {
         flex: 1 1 200px; /* flex-grow: 1; flex-shrink: 1; flex-basis: 200px; */
       }
       ```

   - **`align-self`**: Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.
     - Values: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
     - **Example:**
       ```css
       .flex-item {
         align-self: flex-end; /* Aligns this item to the end of the cross axis */
       }
       ```

---

### **Example:**

Here’s an example demonstrating various Flexbox properties in action:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Properties Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
    <div class="flex-item">Item 4</div>
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

.flex-container {
  display: flex; /* Creates a flex container */
  flex-flow: row wrap; /* Rows that wrap */
  justify-content: space-between; /* Distributes items with space between */
  align-items: center; /* Centers items vertically */
  padding: 10px;
  background-color: #3498db; /* Light blue background for the container */
}

.flex-item {
  flex: 1 1 100px; /* Item can grow and shrink, base size of 100px */
  background-color: #fff; /* White background for items */
  margin: 10px;
  padding: 20px;
  text-align: center; /* Centers text within the item */
  border-radius: 5px; /* Rounds corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds shadow effect */
}
```

In this example:
- A flex container is created with items that wrap onto new lines if necessary.
- Items are spaced evenly and centered within the container.
- Each item has a specified base size, allowing for responsive growth and shrinkage.

---

### **Next Steps:**
Tomorrow, we will explore advanced Flexbox techniques to create more complex and adaptable layouts.

---

### **Resources:**
- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)