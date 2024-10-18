### Day 18: Animations

#### **Objective:**
Learn how to create complex animations using CSS animations, allowing for more control than transitions.

---

### **What are CSS Animations?**
CSS animations enable you to animate the transition between CSS styles smoothly over time. You can define keyframes to specify styles at various points in the animation sequence, providing more flexibility than transitions.

### **Key Components of CSS Animations:**

1. **`@keyframes` Rule**
   - Defines the animation by specifying the styles at various points during the animation sequence.
   - **Example:**
     ```css
     @keyframes example {
       from {
         background-color: red;
       }
       to {
         background-color: yellow;
       }
     }
     ```

2. **Animation Properties**
   - To apply an animation to an element, you need to set the following properties:
   - **`animation-name`**: The name of the `@keyframes` animation you want to use.
   - **`animation-duration`**: How long the animation takes to complete.
   - **`animation-timing-function`**: The speed curve of the animation (similar to transitions).
   - **`animation-delay`**: A delay before the animation starts.
   - **`animation-iteration-count`**: The number of times the animation will run (e.g., `infinite` for continuous).
   - **`animation-direction`**: Whether the animation should play forwards, backwards, or alternate between both.
   - **`animation-fill-mode`**: Defines how a CSS animation applies styles to its target before and after it is executing.

### **Example:**

Here’s an example demonstrating the use of CSS animations on a button:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animations Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <button class="animate-button">Click Me!</button>

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: 'Arial', sans-serif;
  margin: 20px;
}

.animate-button {
  padding: 15px 30px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  animation-name: pulse; /* Name of the animation */
  animation-duration: 1s; /* Duration of the animation */
  animation-timing-function: ease-in-out; /* Timing function */
  animation-iteration-count: infinite; /* Run the animation infinitely */
}

@keyframes pulse {
  0% {
    transform: scale(1); /* Initial scale */
  }
  50% {
    transform: scale(1.1); /* Scale up */
  }
  100% {
    transform: scale(1); /* Scale back to original */
  }
}
```

In this example:
- The button has a `pulse` animation that scales it up and down continuously.
- The `@keyframes` rule defines the animation stages at 0%, 50%, and 100%.
- The button scales up to 1.1 times its size and then back to its original size over `1 second`, with an ease-in-out timing function.

---

### **Next Steps:**
Tomorrow, we will explore advanced animation techniques, including using multiple animations and combining transitions with animations.

---

### **Resources:**
- [MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Tricks - A Complete Guide to CSS Animations](https://css-tricks.com/almanac/properties/a/animation/)