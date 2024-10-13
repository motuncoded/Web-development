### Day 22: HTML5 Form Validation

On Day 22, you’ll focus on HTML5’s built-in form validation features, which allow you to ensure that users submit forms correctly without requiring JavaScript. You can set up custom rules, use predefined validation types, and style invalid fields to guide users when they enter incorrect or incomplete information.

---

#### Goals for Day 22:
- Understand how HTML5 form validation works.
- Learn about different types of validation attributes like `required`, `minlength`, `maxlength`, `pattern`, `type`, and more.
- Customize validation error messages.
- Style input fields to indicate validation errors.
- Learn about accessibility considerations for validation.

---

#### 1. HTML5 Form Validation Overview

HTML5 introduces several form validation attributes that help ensure user inputs are valid before form submission. These attributes allow you to:
- Require certain fields to be filled out.
- Enforce constraints on input values, such as length or pattern.
- Define specific input types like email, number, and URL.

Example of a form with basic HTML5 validation:

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100" required>
  
  <button type="submit">Submit</button>
</form>
```

In this example:
- The `email` field requires a valid email address format.
- The `age` field requires a number between 18 and 100.
- The `required` attribute ensures that the form cannot be submitted unless the fields are filled out.

---

#### 2. Common HTML5 Validation Attributes

Here are some common HTML5 validation attributes:

- **`required`**: Ensures the field must be filled in before submitting the form.
  ```html
  <input type="text" name="username" required>
  ```

- **`minlength` and `maxlength`**: Set the minimum and maximum length for text inputs.
  ```html
  <input type="text" name="password" minlength="8" maxlength="20" required>
  ```

- **`min` and `max`**: Define the minimum and maximum values for inputs like `number` or `date`.
  ```html
  <input type="number" name="age" min="18" max="100">
  ```

- **`pattern`**: Specifies a regular expression that the input value must match.
  ```html
  <input type="text" name="zipcode" pattern="[0-9]{5}" required>
  ```

- **`type`**: HTML5 includes several input types that come with built-in validation, such as `email`, `url`, `tel`, `number`, `date`, and more.
  ```html
  <input type="email" name="user-email" required>
  ```

---

#### 3. Displaying Native Validation Messages

When a form doesn’t pass validation, the browser will display a default error message. These messages vary slightly between browsers, but they generally inform the user what they need to fix.

Example of a native validation message:

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>
```

If the user submits the form without entering a valid email, the browser will display a message like "Please enter a valid email address."

---

#### 4. Customizing Validation Messages

You can customize validation messages using the `setCustomValidity()` method in JavaScript. This allows you to provide more user-friendly or context-specific error messages.

Example of customizing validation messages:

```html
<form id="myForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  
  <button type="submit">Submit</button>
</form>

<script>
  const usernameInput = document.getElementById('username');
  
  usernameInput.addEventListener('input', function () {
    if (usernameInput.validity.valueMissing) {
      usernameInput.setCustomValidity('Please enter your username.');
    } else {
      usernameInput.setCustomValidity('');
    }
  });
</script>
```

In this example:
- The form checks if the username field is missing a value. If so, it displays a custom message: "Please enter your username."

---

#### 5. Styling Invalid Fields

You can style invalid fields using the `:invalid` and `:valid` CSS pseudo-classes. This helps users identify which fields need correction visually.

Example of styling invalid inputs:

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>

<style>
  input:invalid {
    border: 2px solid red;
  }

  input:valid {
    border: 2px solid green;
  }
</style>
```

In this example:
- If the input is invalid, the border will turn red.
- If the input is valid, the border will turn green.

---

#### 6. Validation for Specific Input Types

HTML5 provides built-in validation for various input types, such as:

- **Email validation**: The `type="email"` field ensures that the user enters a valid email format.
  ```html
  <input type="email" name="email" required>
  ```

- **Number validation**: The `type="number"` field allows only numerical input and can be limited with `min` and `max` attributes.
  ```html
  <input type="number" name="quantity" min="1" max="10">
  ```

- **URL validation**: The `type="url"` field requires the user to input a valid URL format.
  ```html
  <input type="url" name="website" required>
  ```

---

#### 7. Accessibility Considerations

When using HTML5 validation, ensure your form remains accessible to all users:
- **Use proper labels**: Every input should have a corresponding `<label>` element to describe its purpose. Labels help screen readers provide context for users.
- **Provide helpful error messages**: If you're using custom validation messages, ensure they are clear and concise for all users, including those relying on screen readers.
- **Make validation errors focusable**: When a form is submitted with errors, the focus should be moved to the first invalid field to help users correct their input quickly.

---

#### Task for Today:
1. Create a form with fields that use HTML5 validation attributes, such as `required`, `pattern`, `type`, and `minlength`.
2. Experiment with different input types, like `email`, `url`, `number`, and `password`, to see how validation works.
3. Customize validation error messages using JavaScript and the `setCustomValidity()` method.
4. Style invalid fields using CSS to guide users visually when they submit invalid input.
5. Ensure the form is accessible by using proper labels and ensuring error messages are user-friendly.

---

By the end of Day 22, you'll have a solid understanding of how to use HTML5's built-in form validation to ensure your users provide the correct information. You'll also know how to customize the validation process and make sure your forms are both user-friendly and accessible.