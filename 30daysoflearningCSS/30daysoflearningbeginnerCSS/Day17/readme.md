### Day 17: Transitions

#### **Objective:**
Learn how to create smooth transitions between different states of an element using CSS transitions.

---

### **What are CSS Transitions?**
CSS transitions allow you to change property values smoothly (over a given duration) from one state to another. This can enhance user experience by providing visual feedback for actions, such as hovering over buttons or focusing on inputs.

### **Key Properties of CSS Transitions:**

1. **`transition-property`**
   - Specifies the CSS property you want to apply the transition to.
   - **Example:** `transition-property: background-color;`

2. **`transition-duration`**
   - Defines how long the transition should take (in seconds or milliseconds).
   - **Example:** `transition-duration: 0.5s;`

3. **`transition-timing-function`**
   - Describes the speed curve of the transition, allowing you to create effects like acceleration and deceleration.
   - Common values include:
   - `linear`: The transition progresses at a constant speed.
   - `ease`: Starts slowly, speeds up, and then slows down at the end.
   - `ease-in`: Starts slowly and speeds up.
   - `ease-out`: Starts quickly and slows down at the end.
   - `ease-in-out`: Starts and ends slowly.
   - **Example:** `transition-timing-function: ease;`

4. **`transition-delay`**
   - Sets a delay before the transition starts.
   - **Example:** `transition-delay: 0.2s;`

### **Example:**

Here’s an example demonstrating the use of CSS transitions on a button:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Transitions Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <button class="transition-button">Hover Me!</button>

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: 'Arial', sans-serif;
  margin: 20px;
}

.transition-button {
  padding: 15px 30px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition-property: background-color, transform; /* Properties to transition */
  transition-duration: 0.3s; /* Duration of the transition */
  transition-timing-function: ease; /* Timing function */
}

.transition-button:hover {
  background-color: #0056b3; /* Change background color on hover */
  transform: scale(1.1); /* Slightly enlarge the button */
}
```

In this example:
- The button transitions its background color when hovered.
- The button also scales up slightly for a more dynamic effect.
- Both the background color change and the scaling happen over `0.3 seconds` with an ease timing function.

---

### **Next Steps:**
Tomorrow, we will explore CSS animations, which allow for more complex movements and effects than transitions.

---

### **Resources:**
- [MDN Web Docs - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [CSS Tricks - A Complete Guide to CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/)