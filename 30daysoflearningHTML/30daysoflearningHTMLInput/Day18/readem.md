### Day 18: Custom Validation Messages

#### **Objective:**

Learn how to create custom validation messages in HTML forms, allowing you to give users more specific and helpful feedback when they input invalid data.

---

#### **Tasks:**

- Override the browser’s default validation messages.
- Use JavaScript to display custom error messages for different types of validation failures.
- Enhance user experience by making error messages clear, specific, and actionable.

---

#### **Key Concepts:**

1. **`setCustomValidity()`**:
   This JavaScript method allows you to set a custom error message for a form element. If the form element fails validation, the custom message will be shown instead of the browser’s default message.

   ```javascript
   document
     .getElementById("username")
     .setCustomValidity("Please enter a username.");
   ```

2. **`reportValidity()`**:
   This method is used to display the custom validation message immediately when an input is invalid.

   ```javascript
   document.getElementById("form").reportValidity();
   ```

3. **`validity` Property**:
   Use the `validity` property to check the validation state of an input field. This property can be used to determine what specific validation error occurred (e.g., `validity.valueMissing`, `validity.typeMismatch`, etc.).

   ```javascript
   if (!input.validity.valid) {
     input.setCustomValidity("Custom error message.");
   } else {
     input.setCustomValidity("");
   }
   ```

---

#### **Example: Custom Validation Messages with JavaScript:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Validation Messages</title>
  </head>
  <body>
    <form id="registration-form" action="/submit" method="POST" novalidate>
      <label for="username">Username (required):</label>
      <input type="text" id="username" name="username" required />
      <span class="error-message" aria-live="polite"></span>

      <label for="email">Email (required):</label>
      <input type="email" id="email" name="email" required />
      <span class="error-message" aria-live="polite"></span>

      <input type="submit" value="Register" />
    </form>

    <script>
      const form = document.getElementById("registration-form");

      form.addEventListener("submit", function (event) {
        const username = document.getElementById("username");
        const email = document.getElementById("email");

        if (!username.validity.valid) {
          username.setCustomValidity("Please enter a username.");
        } else {
          username.setCustomValidity("");
        }

        if (!email.validity.valid) {
          email.setCustomValidity("Please enter a valid email address.");
        } else {
          email.setCustomValidity("");
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          form.reportValidity();
        }
      });
    </script>
  </body>
</html>
```

---

#### **Step-by-Step Explanation:**

1. **HTML Form**:
   - The form contains two fields: `username` and `email`, both of which are required.
   - The `novalidate` attribute is added to the form to disable browser's default validation, allowing full control over the custom messages.
2. **JavaScript**:
   - The `submit` event is handled using JavaScript to check the validity of each field.
   - The `setCustomValidity()` method is used to define a custom message when validation fails.
   - The form's `checkValidity()` method ensures all fields pass validation before the form is submitted.

---

#### **Key Methods for Custom Validation**:

- **`setCustomValidity(message)`**: Sets a custom error message. If you pass an empty string (`""`), the field will be considered valid.
- **`checkValidity()`**: Returns `true` if all form elements are valid, otherwise `false`.
- **`reportValidity()`**: Immediately displays the validation messages for all fields in the form.

---

#### **ARIA for Accessibility**:

- Use `aria-live="polite"` for error messages to ensure that screen readers announce the message when it updates.
- Always associate error messages with the respective input fields to enhance accessibility.

---

#### **Best Practices**:

- Provide clear, concise, and actionable custom validation messages.
- Combine custom messages with the `title` attribute for better browser support.
- Validate the form on both the client-side and server-side to ensure robust security and data integrity.
