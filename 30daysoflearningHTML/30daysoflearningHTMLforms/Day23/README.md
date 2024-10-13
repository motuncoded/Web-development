### Day 23: Custom Error Messages

On Day 23, you’ll focus on creating custom error messages for form validation. While HTML5 provides built-in validation features, customizing the error messages allows for a better user experience by providing clearer, context-specific feedback.

---

#### Goals for Day 23:
- Understand how to implement custom validation messages using JavaScript.
- Learn to provide feedback for specific validation scenarios.
- Explore how to dynamically display error messages.
- Maintain accessibility best practices when displaying validation messages.

---

#### 1. Understanding Validation States

Before customizing error messages, it's important to know the validation states you can check using the `validity` property of input elements. Here are some common states:

- **`valueMissing`**: The input field is required but empty.
- **`typeMismatch`**: The input type does not match (e.g., email format).
- **`patternMismatch`**: The input does not match the specified regular expression pattern.
- **`tooShort`**: The input is shorter than the specified `minlength`.
- **`tooLong`**: The input exceeds the specified `maxlength`.

---

#### 2. Using `setCustomValidity()`

The `setCustomValidity()` method allows you to specify a custom error message that replaces the browser's default message. When the user attempts to submit the form, the custom message will be displayed instead.

**Example: Basic Form Setup**

```html
<form id="myForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required minlength="5">
  
  <button type="submit">Submit</button>
</form>

<script>
  const usernameInput = document.getElementById('username');

  usernameInput.addEventListener('input', function () {
    if (usernameInput.validity.valueMissing) {
      usernameInput.setCustomValidity('Username is required.');
    } else if (usernameInput.validity.tooShort) {
      usernameInput.setCustomValidity(`Username must be at least ${usernameInput.minLength} characters long.`);
    } else {
      usernameInput.setCustomValidity(''); // Clear the error message
    }
  });
</script>
```

In this example:
- The custom error message is set when the input field is empty or too short.
- The message is cleared when the input is valid.

---

#### 3. Displaying Error Messages Dynamically

In addition to using `setCustomValidity()`, you can dynamically display error messages in a dedicated section of the form. This approach provides clear feedback without interfering with the built-in validation.

**Example: Displaying Error Messages Below Input**

```html
<form id="myForm">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <p id="error-message" class="error-message"></p>
  
  <button type="submit">Submit</button>
</form>

<script>
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  emailInput.addEventListener('input', function () {
    if (emailInput.validity.valueMissing) {
      errorMessage.textContent = 'Email is required.';
    } else if (emailInput.validity.typeMismatch) {
      errorMessage.textContent = 'Please enter a valid email address.';
    } else {
      errorMessage.textContent = ''; // Clear error message
    }
  });
</script>

<style>
  .error-message {
    color: red;
    font-size: 14px;
  }
</style>
```

In this example:
- A paragraph element (`<p>`) is used to display error messages below the email input.
- The message updates dynamically based on the validation state of the input.

---

#### 4. Implementing `reportValidity()`

The `reportValidity()` method can be called to show validation messages immediately, without requiring form submission. This method helps users correct input issues as they type.

**Example: Using `reportValidity()`**

```html
<form id="myForm">
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required minlength="8">
  
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault(); // Prevent form submission
      form.reportValidity();  // Show error messages
    }
  });
</script>
```

In this example:
- When the user submits the form, `reportValidity()` shows validation messages for any invalid fields, helping users correct their input.

---

#### 5. Accessibility Best Practices

When creating custom error messages, it’s important to ensure they are accessible:

- **Use ARIA attributes**: To ensure screen readers announce error messages, use `aria-live="assertive"` on the error message container.
  
  ```html
  <p id="error-message" class="error-message" aria-live="assertive"></p>
  ```

- **Be clear and concise**: Custom error messages should clearly explain what is wrong and how to fix it. Avoid jargon and technical terms.

---

#### 6. Task for Today
1. Create a form with multiple input fields, each using custom validation messages.
2. Implement different error messages for various validation scenarios (e.g., required fields, type mismatches).
3. Use a dedicated area in the form to display error messages dynamically.
4. Implement `reportValidity()` to show validation messages before submission.
5. Ensure all error messages are accessible and easy to understand.

---

By the end of Day 23, you'll be adept at customizing form validation messages to enhance the user experience. This skill will not only improve usability but also ensure your forms are more informative and accessible.