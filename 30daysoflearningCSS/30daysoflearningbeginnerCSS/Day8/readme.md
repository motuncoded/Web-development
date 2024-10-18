### Day 8: Flexbox Basics

#### **Objective:**
Understand the basics of the Flexbox layout model in CSS, which allows for responsive and efficient layouts.

---

### **Key Concepts:**

1. **What is Flexbox?**
   Flexbox, or the Flexible Box Layout, is a CSS layout model that provides an easy and efficient way to design a layout structure, even when the sizes of the items are unknown or dynamic. It allows for alignment, direction, and distribution of space among items in a container.

2. **Flex Container and Flex Items:**
   - **Flex Container:** The parent element that contains flex items. To create a flex container, apply `display: flex;` or `display: inline-flex;`.
   - **Flex Items:** The direct children of the flex container. These items can be manipulated using various flex properties.

   **Example:**
   ```css
   .flex-container {
     display: flex; /* Creates a flex container */
   }
   ```

3. **Main Axis and Cross Axis:**
   - The **main axis** is the primary direction in which flex items are laid out (horizontally or vertically).
   - The **cross axis** is perpendicular to the main axis.

4. **Flex Container Properties:**
   - **`flex-direction`**: Defines the direction of the flex items. Possible values:
     - `row` (default): Lays items out horizontally.
     - `row-reverse`: Lays items out horizontally in reverse order.
     - `column`: Lays items out vertically.
     - `column-reverse`: Lays items out vertically in reverse order.
   
   **Example:**
   ```css
   .flex-container {
     flex-direction: row; /* or row-reverse, column, column-reverse */
   }
   ```

   - **`justify-content`**: Aligns flex items along the main axis. Possible values:
     - `flex-start`: Aligns items to the start of the container.
     - `flex-end`: Aligns items to the end of the container.
     - `center`: Centers items in the container.
     - `space-between`: Distributes items evenly with space between them.
     - `space-around`: Distributes items with equal space around them.

   **Example:**
   ```css
   .flex-container {
     justify-content: center; /* Aligns items to the center */
   }
   ```

   - **`align-items`**: Aligns flex items along the cross axis. Possible values:
     - `flex-start`: Aligns items to the start of the cross axis.
     - `flex-end`: Aligns items to the end of the cross axis.
     - `center`: Centers items along the cross axis.
     - `baseline`: Aligns items along their baseline.
     - `stretch`: Stretches items to fill the container (default).

   **Example:**
   ```css
   .flex-container {
     align-items: center; /* Aligns items to the center of the cross axis */
   }
   ```

5. **Flex Item Properties:**
   - **`flex-grow`**: Defines the ability for a flex item to grow if necessary. A value of `1` means the item will take up any available space.
   - **`flex-shrink`**: Defines the ability for a flex item to shrink if necessary. A value of `1` means the item can shrink.
   - **`flex-basis`**: Defines the default size of a flex item before space distribution. You can specify lengths, percentages, or `auto`.

   **Example:**
   ```css
   .flex-item {
     flex-grow: 1; /* Item can grow to take available space */
     flex-shrink: 0; /* Item will not shrink */
     flex-basis: 200px; /* Default size of the item */
   }
   ```

---

### **Example:**

Here’s an example demonstrating how to use Flexbox to create a simple responsive layout:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Basics</title>
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
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

.flex-container {
  display: flex; /* Creates a flex container */
  flex-direction: row; /* Lays items out in a row */
  justify-content: space-around; /* Distributes items evenly */
  align-items: center; /* Centers items along the cross axis */
  padding: 10px;
  background-color: #3498db; /* Light blue background for the container */
}

.flex-item {
  flex-grow: 1; /* Allows items to grow */
  background-color: #fff; /* White background for items */
  margin: 10px;
  padding: 20px;
  text-align: center; /* Centers text within the item */
  border-radius: 5px; /* Rounds corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds shadow effect */
}
```

In this example:
- A flex container is created that houses four flex items.
- Items are laid out in a row, evenly spaced and centered vertically.
- Each item has a white background with rounded corners and a slight shadow for emphasis.

---

### **Next Steps:**
Tomorrow, we will dive deeper into Flexbox by exploring advanced techniques and properties to create more complex layouts.

---

### **Resources:**
- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)