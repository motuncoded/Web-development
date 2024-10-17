# Day 13: Reset Buttons

Today, you will explore reset buttons, which allow users to clear all inputs in a form and restore them to their initial values. Reset buttons can be useful when users want to discard their current entries and start fresh. You will learn how to implement reset buttons, customize them, and ensure they are accessible.

---

### Goals for Day 13:

- Learn the basic HTML structure for reset buttons.
- Understand the behavior of reset buttons and how they work within forms.
- Customize the appearance of reset buttons with CSS.
- Ensure accessibility with ARIA attributes.

---

## 1. Reset Button Basics

The `<input type="reset">` or `<button type="reset">` elements are used to create reset buttons. When clicked, a reset button clears all form fields back to their default values (the values present when the form was loaded).

Here’s the basic structure:

Using `<input>`:

```html
<form>
  <input type="text" name="name" value="John Doe" />
  <input type="reset" value="Reset" />
</form>
```

Using `<button>`:

```html
<form>
  <input type="text" name="name" value="John Doe" />
  <button type="reset">Reset Form</button>
</form>
```

#### 2. Behavior of Reset Buttons

Reset buttons will reset all form elements, including text fields, checkboxes, radio buttons, and select dropdowns, to their initial state. This behavior is automatic and doesn't require additional scripting unless you want custom reset behavior (e.g., resetting only specific fields).

Example:

```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" value="JaneDoe" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <input type="reset" value="Clear Form" />
</form>
```

In the example above, clicking the "Clear Form" button will reset both the username and email fields.

#### 3. Customizing Reset Buttons with CSS

You can style reset buttons similarly to submit buttons, using CSS to change the appearance.

Example:

```css
button[type="reset"] {
  background-color: #f44336; /* Accent color for reset */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button[type="reset"]:hover {
  background-color: #d32f2f; /* Darker on hover */
}
```

This makes the reset button stand out, particularly if you want to visually differentiate it from other buttons like "Submit."

#### 4. Accessibility with ARIA

Although reset buttons are typically straightforward, it's still important to make sure they are accessible. If the reset button includes additional elements (like icons), you should provide a clear `aria-label`.

Example:

```html
<form>
  <button type="reset" aria-label="Clear the form">
    <img src="reset-icon.png" alt="" /> Reset
  </button>
</form>
```

This way, screen readers will interpret the button's purpose clearly.

#### 5. Enhancing Reset Behavior with JavaScript (Optional)

If you need more control over what gets reset, or if you want to add custom behavior, JavaScript can be used to enhance the reset functionality.

Example of resetting only certain fields:

```html
<form id="myForm">
  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" />

  <label for="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" />

  <button type="button" id="customReset">Reset First Name Only</button>
</form>

<script>
  document.getElementById("customReset").addEventListener("click", function () {
    document.getElementById("firstName").value = ""; // Reset only the first name
  });
</script>
```

---

#### Task for Today:

1. Create a form with a reset button.
2. Use the `<button>` element for more flexibility.
3. Customize the reset button’s appearance using CSS.
4. Implement ARIA attributes for accessibility.
5. (Optional) Use JavaScript to create custom reset behavior, if needed.

---

That wraps up Day 13! By the end of today, you will have a good understanding of how reset buttons work, how to customize them, and how to ensure they provide an accessible experience.
