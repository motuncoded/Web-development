### Day 3: Email Input

Welcome to Day 3! Today, you'll focus on the **Email Input** field, an essential component for collecting user email addresses in forms. Mastering email input handling will enhance both functionality and user experience in your web forms.

---

#### Goals for Day 3:

- Understand the basic structure of an email input field.
- Learn how to implement attributes specific to email inputs.
- Explore validation considerations for email fields.
- Implement styling and accessibility best practices.

---

#### 1. Basic Structure of an Email Input

An email input field is created using the `<input>` element with the `type` attribute set to `email`. This allows the browser to provide built-in validation for email formats.

Here's a simple example:

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
</form>
```

In this example:

- The `required` attribute indicates that this field must be filled out before the form can be submitted.

---

#### 2. Implementing Attributes for Email Inputs

You can enhance the user experience and validation of email input fields with several attributes:

- **`placeholder`**: Provides a hint to the user about what to enter.
- **`maxlength`**: Limits the maximum number of characters that can be entered.
- **`autocomplete`**: Suggests previously entered email addresses.
- **`multiple`**: Allows users to enter multiple email addresses separated by commas.

Example:

```html
<form>
  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="you@example.com"
    required
    maxlength="50"
    autocomplete="email"
    multiple
  />
</form>
```

---

#### 3. Validation Considerations for Email Inputs

When collecting email addresses, it’s important to ensure they are valid. Browsers provide built-in validation for email input types, but you can also add custom validation.

- **Native Validation**: Browsers will check if the input matches the email format (e.g., `username@domain.com`).

Here's how to handle validation with a custom message:

```html
<form id="emailForm">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
  <span id="emailError" class="error-message" aria-live="polite"></span>
  <button type="submit">Submit</button>
</form>

<script>
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      const emailInput = document.getElementById("email");
      const emailError = document.getElementById("emailError");

      if (!emailInput.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";
        event.preventDefault(); // Prevent form submission
      } else {
        emailError.textContent = ""; // Clear error message
      }
    });
</script>
```

---

#### 4. Styling Email Inputs

You can style email input fields to ensure they are user-friendly and visually appealing. Here’s an example CSS:

```css
input[type="email"] {
  width: 100%; /* Full width */
  padding: 10px; /* Add padding */
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 4px; /* Rounded corners */
  font-size: 16px; /* Font size */
}

input[type="email"]:focus {
  border-color: #005fcc; /* Change border color on focus */
  outline: none; /* Remove default outline */
}
```

---

#### 5. Accessibility Considerations

To ensure accessibility for all users, follow these best practices:

- **Use Labels**: Always provide `<label>` elements associated with email inputs for clarity.
- **Clear Error Messaging**: Indicate if the email does not meet the required criteria.
- **Keyboard Accessibility**: Ensure users can navigate to the email field using the keyboard.

Example of an accessible email input with error messaging:

```html
<form id="signupForm">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required aria-required="true" />
  <p id="emailError" class="error-message" aria-live="polite"></p>
  <button type="submit">Submit</button>
</form>
```

---

#### Task for Today

1. Create a simple HTML form with an email input field.
2. Implement various attributes (e.g., `placeholder`, `maxlength`, `autocomplete`, `multiple`).
3. Add custom validation to ensure valid email addresses are entered.
4. Apply basic CSS styling to enhance the appearance of your email input.
5. Ensure that your form is accessible by using proper labels and error handling.

---

By the end of Day 3, you will have a solid understanding of how to create and manage email input fields in forms, improving overall functionality and user experience. Keep up the great work!
