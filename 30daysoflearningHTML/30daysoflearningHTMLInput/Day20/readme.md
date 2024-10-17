### Day 20: Form Accessibility

#### **Objective:**

Learn how to create accessible forms using ARIA attributes, semantic HTML, and best practices to ensure that all users, including those with disabilities, can navigate and interact with your forms.

---

#### **Tasks:**

- Ensure forms are navigable via keyboard.
- Use ARIA attributes to enhance accessibility for assistive technologies.
- Implement proper error handling and validation with accessible feedback.
- Use semantic HTML elements and correctly associate labels with inputs.

---

#### **Key Concepts:**

1. **Keyboard Navigation:**
   Forms must be fully navigable via keyboard to accommodate users who cannot use a mouse.

   - Ensure `tabindex` is used correctly for custom components, allowing users to navigate through form fields using the `Tab` key.

2. **ARIA Attributes:**

   - **`aria-label`**: Provides an accessible label to form controls when a visible label is not provided.
   - **`aria-labelledby`**: Associates an input with another element that describes it.
   - **`aria-describedby`**: Associates an input with an element that gives additional information, such as a hint or error message.
   - **`aria-invalid`**: Used to indicate that the input has failed validation.

3. **Error Messages:**
   Accessible forms should include clear error messages for invalid fields.

   - Use **`aria-live="polite"`** for error messages so that screen readers announce them dynamically.
   - Mark invalid inputs using **`aria-invalid="true"`** and provide an explanation of the error with **`aria-describedby`**.

4. **Semantic HTML:**
   Always use the appropriate HTML elements like `<label>`, `<input>`, `<select>`, and `<textarea>` to create forms. This ensures that assistive technologies can recognize and announce form controls properly.

5. **Fieldset and Legend:**
   Use **`<fieldset>`** to group related inputs and **`<legend>`** to provide a label for the entire group, improving the accessibility and structure of the form.

---

#### **Example: Accessible Form with ARIA:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Accessible Form</title>
  </head>
  <body>
    <form id="registration-form" action="/submit" method="POST" novalidate>
      <fieldset>
        <legend>Personal Information</legend>

        <div class="input-group">
          <label for="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            aria-describedby="firstname-desc"
          />
          <span id="firstname-desc" class="sr-only"
            >Your first name is required.</span
          >
        </div>

        <div class="input-group">
          <label for="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            aria-describedby="lastname-desc"
          />
          <span id="lastname-desc" class="sr-only"
            >Your last name is required.</span
          >
        </div>
      </fieldset>

      <fieldset>
        <legend>Account Details</legend>

        <div class="input-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-describedby="email-desc"
            aria-invalid="false"
          />
          <span id="email-desc" class="sr-only"
            >Enter a valid email address.</span
          >
        </div>

        <div class="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            aria-describedby="password-desc"
            aria-invalid="false"
          />
          <span id="password-desc" class="sr-only"
            >Your password must be at least 8 characters.</span
          >
        </div>
      </fieldset>

      <input type="submit" value="Register" />

      <div id="error-message" role="alert" aria-live="polite"></div>
    </form>

    <script>
      const form = document.getElementById("registration-form");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const errorMessage = document.getElementById("error-message");

      form.addEventListener("submit", function (event) {
        let formIsValid = true;

        if (!email.validity.valid) {
          formIsValid = false;
          email.setAttribute("aria-invalid", "true");
          errorMessage.textContent = "Please enter a valid email address.";
        } else {
          email.setAttribute("aria-invalid", "false");
        }

        if (!password.validity.valid) {
          formIsValid = false;
          password.setAttribute("aria-invalid", "true");
          errorMessage.textContent = "Password must be at least 8 characters.";
        } else {
          password.setAttribute("aria-invalid", "false");
        }

        if (!formIsValid) {
          event.preventDefault();
          errorMessage.focus();
        }
      });
    </script>
  </body>
</html>
```

---

#### **Explanation:**

1. **ARIA Attributes:**

   - The **`aria-describedby`** attribute connects each input to a description or instruction (like error messages or additional information).
   - **`aria-invalid="true"`** is used to mark inputs that fail validation. Screen readers will announce that the input is invalid.
   - The **`role="alert"`** and **`aria-live="polite"`** attributes ensure that error messages are dynamically announced by screen readers.

2. **Keyboard Accessibility:**

   - The form is fully navigable using the keyboard, allowing users to move between fields and submit the form without needing a mouse.

3. **Error Handling:**
   - When the form is submitted, JavaScript checks if any inputs are invalid and sets custom error messages accordingly.
   - The **`role="alert"`** ensures that error messages are announced to users relying on screen readers.

---

#### **ARIA and Best Practices:**

- Always use **`aria-live`** for dynamically updated content like error messages.
- Use **`aria-describedby`** to associate inputs with instructions, hints, or error messages.
- Ensure all form elements are labeled appropriately, either through visible labels or **`aria-label`** for hidden ones.
- Avoid using **`tabindex`** for anything other than custom controls, as it can disrupt natural tab order.

---

#### **Best Practices:**

- **Visible and Clear Labels**: Labels should always be visible to all users unless explicitly using visually hidden techniques for aesthetic reasons.
- **Error Feedback**: Provide immediate feedback for invalid inputs using both visual cues and accessible ARIA attributes for screen reader users.
- **Semantic HTML**: Stick to standard HTML elements like `<label>`, `<input>`, and `<button>`, which have built-in accessibility support.

---

By focusing on form accessibility, you ensure that all users, regardless of ability, can easily interact with and submit your forms, resulting in a better user experience for everyone.
