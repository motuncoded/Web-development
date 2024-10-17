### Day 16: Common Input Attributes

#### **Objective:**

Learn about common attributes used in various input elements to control behavior, appearance, and validation in HTML forms.

---

#### **Task:**

- Understand and apply the most commonly used input attributes.
- Explore how attributes like `required`, `disabled`, `readonly`, `maxlength`, `pattern`, and `placeholder` can improve form usability and validation.

---

#### **Common Input Attributes:**

1. **`required`**: Ensures that the user must fill in the input before submitting the form.

   ```html
   <input type="text" name="username" required />
   ```

2. **`placeholder`**: Displays placeholder text inside the input field, giving users a hint of the expected input.

   ```html
   <input type="email" name="email" placeholder="Enter your email" />
   ```

3. **`maxlength`**: Limits the number of characters that can be entered into the input field.

   ```html
   <input type="text" name="username" maxlength="15" />
   ```

4. **`min` and `max`**: Set limits for numeric or date inputs.

   ```html
   <input type="number" name="age" min="18" max="100" />
   ```

5. **`pattern`**: Defines a regular expression that the input value must match for form validation.

   ```html
   <input
     type="text"
     name="zipcode"
     pattern="[0-9]{5}"
     title="Please enter a 5-digit zip code"
   />
   ```

6. **`readonly`**: Makes the input field non-editable but still submittable.

   ```html
   <input type="text" name="country" value="USA" readonly />
   ```

7. **`disabled`**: Disables the input field, preventing any interaction or form submission.

   ```html
   <input type="text" name="username" disabled />
   ```

8. **`step`**: Controls the increments for numeric or date inputs.
   ```html
   <input type="number" name="quantity" step="1" />
   ```

---

#### **Example Form Using Common Attributes:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Common Input Attributes Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        maxlength="15"
        required
      />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="18" max="100" required />

      <label for="zipcode">Zip Code:</label>
      <input
        type="text"
        id="zipcode"
        name="zipcode"
        pattern="[0-9]{5}"
        title="Please enter a 5-digit zip code"
        required
      />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

---

#### **Best Practices:**

- Use `required` to ensure mandatory fields are filled before submission.
- Leverage `pattern` and `maxlength` for better client-side validation.
- Use `placeholder` to provide users with input hints, but do not rely on it for essential instructions.
- Make forms accessible by using clear labels and ensuring that interactive elements (like inputs) behave as expected when disabled or readonly.
