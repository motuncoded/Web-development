# Day 5: Text Input Fields

- Goal:Learn how to use and customize text input fields in HTML forms.
- Activity:Create a form with various text input fields, explore attributes, and practice validation.

---

## 1. What is a Text Input Field?

A text input field allows users to enter short, single-line text. It is one of the most common elements in web forms and is represented by the `<input>` element with the `type="text"` attribute.

### Basic Syntax:

```html
<input type="text" name="username" />
```

### Example:

```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" />
</form>
```

---

## 2. Common Attributes for Text Input Fields

Text input fields come with various attributes that allow you to control their behavior and enhance user experience.

### a. `placeholder` Attribute

The `placeholder` attribute displays temporary text inside the input field, providing users with a hint of what kind of data is expected.

```html
<input type="text" name="username" placeholder="Enter your username" />
```

---

### b. `required` Attribute

The `required` attribute ensures that the input field must be filled in before form submission.

```html
<input type="text" name="username" required />
```

---

### c. `maxlength` Attribute

The `maxlength` attribute sets the maximum number of characters that can be entered into the input field.

```html
<input type="text" name="username" maxlength="20" />
```

---

### d. `minlength` Attribute

The `minlength` attribute sets the minimum number of characters required for the input to be valid.

```html
<input type="text" name="username" minlength="5" />
```

---

### e. `pattern` Attribute

The `pattern` attribute allows you to set a regular expression that the input value must match. This is useful for enforcing specific formats (e.g., phone numbers, usernames).

```html
<input type="text" name="username" pattern="[A-Za-z]{3,}" />
```

### Explanation:

- This pattern enforces that the input must contain at least 3 letters (upper or lower case), but no numbers or special characters.

---

### f. `value` Attribute

The `value` attribute sets a default value for the text input field.

```html
<input type="text" name="username" value="defaultUsername" />
```

---

### g. `readonly` and `disabled` Attributes

- `readonly`: Makes the input field non-editable but still selectable.
- `disabled`: Disables the input field, making it non-editable and non-selectable.

```html
<input type="text" name="username" value="readonly" readonly />
<input type="text" name="username" value="disabled" disabled />
```

---

## 3. Example of a Text Input Field Form

Here’s a form that demonstrates various attributes on text input fields:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Text Input Field Example</title>
  </head>
  <body>
    <h1>Registration Form</h1>

    <form action="/submit" method="POST">
      <label for="username">Username (5-15 characters):</label>
      <input
        type="text"
        id="username"
        name="username"
        minlength="5"
        maxlength="15"
        placeholder="Enter your username"
        required
      /><br />

      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      /><br />

      <label for="password">Password (at least 8 characters):</label>
      <input
        type="password"
        id="password"
        name="password"
        minlength="8"
        placeholder="Enter your password"
        required
      /><br />

      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

---

## 4. Validation for Text Input Fields

HTML5 provides built-in validation for text input fields. You can use attributes such as `required`, `pattern`, `maxlength`, and `minlength` to ensure that the input meets specific criteria.

### a. Example with Validation

```html
<form>
  <label for="username">Username (only letters, 3-15 characters):</label>
  <input
    type="text"
    id="username"
    name="username"
    pattern="[A-Za-z]{3,15}"
    required
  />

  <input type="submit" value="Submit" />
</form>
```

If the user inputs invalid data, the browser will automatically display an error message.

---

## 5. Activity: Create a Form with Text Inputs

### Task:

- Build a registration form that collects the user's **username**, **email**, and **password**.
- Use the `placeholder`, `maxlength`, and `pattern` attributes to enforce formatting and validation.
- Add at least one `readonly` or `disabled` input field.

---

### Sample Form:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Text Input Form</title>
  </head>
  <body>
    <h1>User Registration</h1>

    <form action="/submit" method="POST">
      <label for="username">Username (3-15 characters, letters only):</label>
      <input
        type="text"
        id="username"
        name="username"
        pattern="[A-Za-z]{3,15}"
        placeholder="Enter your username"
        required
      /><br />

      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      /><br />

      <label for="password">Password (min 8 characters):</label>
      <input
        type="password"
        id="password"
        name="password"
        minlength="8"
        placeholder="Enter your password"
        required
      /><br />

      <label for="country">Country (readonly):</label>
      <input
        type="text"
        id="country"
        name="country"
        value="USA"
        readonly
      /><br />

      <button type="submit">Register</button>
    </form>
  </body>
</html>
```

---

### Next Steps:

- Try using other text input types such as `email`, `url`, or `tel` to collect specific types of data.
- Explore how JavaScript can be used to provide custom validation and enhance user interactions with text input fields.

---

Happy coding!
