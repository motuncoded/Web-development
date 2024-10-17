### Day 20: Customizing Input Styles

On Day 20, you'll focus on customizing the appearance of form inputs to create polished, user-friendly interfaces. By styling inputs like text fields, buttons, checkboxes, radio buttons, and more, you can align your form designs with your overall website theme while improving the user experience. You’ll learn how to style inputs using CSS and ensure accessibility while maintaining a visually appealing design.

---

#### Goals for Day 20:

- Learn how to apply CSS to customize text inputs, buttons, checkboxes, radio buttons, and other input elements.
- Understand best practices for making input styles accessible and responsive.
- Experiment with adding hover, focus, and active states to inputs.
- Explore modern design techniques like rounded corners, shadows, and transitions for interactive elements.

---

#### 1. Customizing Text Input Fields

Text input fields are a central part of most forms, and they can be customized using basic CSS properties such as `border`, `padding`, `background-color`, and more.

Example of customizing a text input field:

```html
<form>
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" class="custom-input" />

  <input type="submit" value="Submit" class="custom-button" />
</form>

<style>
  .custom-input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .custom-input:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  .custom-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .custom-button:hover {
    background-color: #45a049;
  }
</style>
```

In this example:

- The text input has rounded corners, padding, and a focus state that changes the border color and adds a subtle shadow.
- The submit button is styled with a green background, rounded corners, and a hover effect.

#### 2. Styling Buttons

Buttons are important interactive elements in forms. You can customize them by adjusting their size, color, border, hover effects, and more.

Example of a modern, styled button:

```html
<button class="primary-button">Submit</button>

<style>
  .primary-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .primary-button:hover {
    background-color: #2980b9;
  }

  .primary-button:active {
    background-color: #1a6698;
  }
</style>
```

In this example:

- The button has a rounded pill shape with a smooth transition effect when hovered.
- It also has an active state that provides feedback when clicked.

#### 3. Customizing Checkboxes and Radio Buttons

Styling checkboxes and radio buttons can be more challenging because browsers provide limited native customization options. You can hide the default input and replace it with a custom design using CSS.

Example of customized checkboxes:

```html
<form>
  <label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkbox-style"></span> Subscribe to newsletter
  </label>
</form>

<style>
  /* Hide the default checkbox */
  .custom-checkbox input {
    display: none;
  }

  /* Style the custom checkbox */
  .checkbox-style {
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  /* Style when checkbox is checked */
  .custom-checkbox input:checked + .checkbox-style {
    background-color: #4caf50;
  }

  /* Add checkmark icon when checked */
  .custom-checkbox input:checked + .checkbox-style::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>
```

This example hides the default checkbox input and creates a custom box using the `::after` pseudo-element to display a checkmark when the checkbox is selected.

#### 4. Styling Focus and Hover States

Creating interactive focus and hover states can make your forms feel more engaging. Focus states are especially important for accessibility, as they indicate to keyboard users where their focus is on the page.

Example of input hover and focus states:

```css
.custom-input:hover {
  border-color: #888;
}

.custom-input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}
```

In this example:

- The input field changes its border color when hovered.
- A green border and box-shadow appear when the field is focused.

#### 5. Responsive and Accessible Input Styles

To make your input styles accessible, consider these best practices:

- **Ensure sufficient color contrast**: Make sure the text and background colors have sufficient contrast for readability, especially for users with visual impairments. The Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1.
- **Provide clear focus indicators**: Focus states should be visually distinct so that keyboard and screen reader users can easily navigate forms.

- **Responsive design**: Make sure your form elements adjust appropriately on different screen sizes. Use relative units like percentages and `em` for sizing inputs and buttons.

Example of a responsive text input:

```css
.custom-input {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  font-size: 1em;
}
```

#### 6. Advanced Input Styling (Optional)

You can also use CSS transitions, animations, and advanced selectors to create dynamic input styles that respond to user interactions.

Example of an animated submit button:

```css
.animated-button {
  background-color: #ff5722;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.animated-button:hover {
  background-color: #e64a19;
  transform: scale(1.05);
}

.animated-button:active {
  background-color: #d84315;
  transform: scale(0.95);
}
```

In this example, the button grows slightly when hovered and shrinks when clicked, creating a tactile, interactive experience.

---

#### Task for Today:

1. Customize a form with text inputs, buttons, and other input elements.
2. Add hover and focus states to enhance interactivity.
3. Ensure your input styles are accessible by using proper contrast and clear focus indicators.
4. Make sure your form is responsive by adjusting input sizes for different screen widths.
5. (Optional) Experiment with animations and transitions to add interactivity.

---

That wraps up Day 20! By the end of today, you’ll know how to customize input styles for text fields, buttons, checkboxes, and more. You’ll also be able to create responsive, accessible, and interactive forms that enhance the user experience.
