### Day 17: Input Validation

#### **Objective:**

Learn about HTML input validation methods and how to ensure user data is accurate and meets specific criteria before form submission.

---

#### **Tasks:**

- Understand client-side validation using HTML attributes like `required`, `pattern`, `minlength`, `maxlength`, `min`, and `max`.
- Explore validation with custom messages and error handling.
- Ensure accessibility by associating error messages with form inputs using ARIA attributes.

---

#### **Types of Input Validation:**

1. **Required Fields**:
   Use the `required` attribute to make sure certain fields are filled out before the form is submitted.

   ```html
   <input type="text" name="username" required />
   ```

2. **Pattern Matching**:
   The `pattern` attribute uses regular expressions to validate input formats (e.g., email, phone number).

   ```html
   <input
     type="text"
     name="zipcode"
     pattern="[0-9]{5}"
     title="Please enter a 5-digit zip code"
     required
   />
   ```

3. **Length Validation**:
   Use `minlength` and `maxlength` to restrict the length of text input fields.

   ```html
   <input
     type="password"
     name="password"
     minlength="8"
     maxlength="16"
     required
   />
   ```

4. **Range Validation**:
   For number and date inputs, `min` and `max` can set a valid range of values.

   ```html
   <input type="number" name="age" min="18" max="65" required />
   ```

5. **Custom Error Messages**:
   You can provide custom validation messages using `title` or by JavaScript for more complex logic.
   ```html
   <input
     type="email"
     name="email"
     required
     title="Please enter a valid email address."
   />
   ```

---

#### **Example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input Validation Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="username">Username (max 15 characters):</label>
      <input
        type="text"
        id="username"
        name="username"
        maxlength="15"
        required
      />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password (8-16 characters):</label>
      <input
        type="password"
        id="password"
        name="password"
        minlength="8"
        maxlength="16"
        required
      />

      <label for="age">Age (18-65):</label>
      <input type="number" id="age" name="age" min="18" max="65" required />

      <label for="zipcode">Zip Code (5 digits):</label>
      <input
        type="text"
        id="zipcode"
        name="zipcode"
        pattern="[0-9]{5}"
        title="Enter a 5-digit zip code"
        required
      />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

---

#### **Key Attributes for Validation**:

- **`required`**: Ensures that a field must be filled.
- **`pattern`**: Validates input against a regular expression.
- **`minlength` and `maxlength`**: Restrict the number of characters.
- **`min` and `max`**: Define the range for numbers and dates.
- **`title`**: Customizes the message displayed when validation fails.

---

#### **ARIA and Accessibility:**

- Use ARIA attributes like `aria-invalid` and `aria-describedby` to enhance the accessibility of error messages. For example:
  ```html
  <input
    type="text"
    id="username"
    aria-invalid="false"
    aria-describedby="username-error"
  />
  <span id="username-error" role="alert"
    >Username is required and must be less than 15 characters.</span
  >
  ```

---

#### **Best Practices:**

- Combine client-side validation (HTML5) with server-side validation for robust security.
- Use meaningful error messages that help users fix mistakes quickly.
- Test the form with different types of input to ensure all cases are handled properly.
