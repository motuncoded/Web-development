# Day 12: Submit Buttons

Today, you will focus on submit buttons, which are an essential part of any form, allowing users to submit the form data for processing. You will explore the different types of submit buttons, how to style and customize them, and how to make them accessible using ARIA attributes.

---

### Goals for Day 12:

- Learn the basic HTML structure for submit buttons.
- Understand how to customize the button’s text and behavior.
- Explore different types of submit buttons (e.g., input vs. button elements).
- Implement ARIA attributes for accessibility.
- Style and customize submit buttons with CSS.

---

## 1. Submit Button Basics

A submit button is created using the `<input type="submit">` or `<button type="submit">` elements. When clicked, it triggers the form submission. Here's the basic structure using both methods:

Using `<input>`:

```html
<form>
  <input type="submit" value="Submit" />
</form>
```

Using `<button>`:

```html
<form>
  <button type="submit">Submit</button>
</form>
```

## 2. Customizing the Submit Button

You can customize the button’s text or add icons within it, especially if you use the `<button>` element.

Example:

```html
<form>
  <button type="submit">
    <img src="submit-icon.png" alt="Submit Icon" /> Submit Form
  </button>
</form>
```

The `<button>` element is more flexible because it allows for HTML content inside the button, such as text, icons, or even styling.

## 3. Types of Submit Buttons

Both `<input type="submit">` and `<button type="submit">` have their use cases, but `<button>` is generally more flexible since it allows more control over the content inside the button (e.g., text and images).

- **`<input type="submit">`**: Simpler, but limited to text inside the button.
- **`<button type="submit">`**: More customizable, can include HTML elements inside (like images or icons).

## 4. Accessibility with ARIA

Submit buttons should be properly labeled and easy to understand for users relying on assistive technologies.

- **`aria-label`**: Use this attribute if the button includes complex content (such as an icon) to provide a clear, descriptive label for screen readers.
- **`aria-disabled`**: When a button is temporarily disabled, use `aria-disabled="true"` to inform screen readers.

Example:

```html
<form>
  <button type="submit" aria-label="Submit the form with your data">
    <img src="submit-icon.png" alt="" /> Submit
  </button>
</form>
```

## 5. Styling Submit Buttons with CSS

You can customize the look of the submit button using CSS. For instance, you can change its background color, border, and hover effects.

Basic styling example:

```css
button[type="submit"] {
  background-color: #4caf50; /* Primary color */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049; /* Slightly darker on hover */
}

button[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
```

---

## 6. Enhancing with JavaScript

You can further enhance submit buttons by using JavaScript to trigger actions when clicked. For example, you might want to disable the button after a click to prevent multiple submissions or change the text to show a loading state.

Example:

```html
<form id="myForm">
  <button type="submit" id="submitBtn">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function () {
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
  });
</script>
```

---

#### Task for Today:

1. Create a form with a submit button.
2. Use the `<button>` element for flexibility and customize the content inside the button.
3. Implement ARIA attributes to ensure accessibility.
4. Style the submit button with CSS and optionally add JavaScript to enhance the behavior (e.g., loading state or disabling after submission).

---

That’s all for Day 12! After completing today’s task, you will have a clear understanding of submit buttons, how to customize them, ensure accessibility, and enhance their functionality with CSS and JavaScript.
