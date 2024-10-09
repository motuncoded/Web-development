# Day 15: HTML Forms with Validation

Forms are one of the most essential components of a webpage, allowing users to interact with your site by submitting data. HTML5 introduces several new features that make form validation much easier without needing JavaScript.

Today, we’ll explore how to create forms, add different types of input fields, and implement built-in HTML5 validation techniques to improve user experience.

## 1. Creating a Basic Form

A basic HTML form uses the <form> tag, which can contain various input fields like text, email, password, radio buttons, and more.

Example:

```html
Copy code
<form action="/submit-form" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100" />

  <input type="submit" value="Submit" />
</form>
```

## 2. Input Types

HTML5 provides several new input types, making it easier to collect specific data types. Below are some commonly used input types:

- Text Input

```html
Copy code <input type="text" name="name" required />
```

- Email Input

```html
Copy code <input type="email" name="email" required />
```

Validation: Automatically checks if the entered email is in a valid format (example@domain.com).

- Password Input

```html
Copy code <input type="password" name="password" required />
```

Note: The password input obscures the entered text.

- Number Input

```html
Copy code <input type="number" name="age" min="18" max="100" />
```

Validation: Ensures the user enters a number within the specified range.

- Date Input

```html
Copy code <input type="date" name="dob" />
```

Validation: Enforces the correct date format and provides a calendar picker in modern browsers.

## 3. Adding Validation Attributes

HTML5 provides a variety of form validation attributes that you can apply to input fields. These ensure the form is submitted with correct data formats, avoiding the need for JavaScript in many cases.

Common Validation Attributes:

- required: Ensures the field must be filled before submitting.
- min and max: Sets the minimum and maximum value for numeric inputs.
- minlength and maxlength: Specifies the minimum and maximum number of characters allowed in text inputs.
- pattern: Defines a regular expression that the input value must match.

Example: Form with Validation

```html
Copy code
<form action="/submit-form" method="POST">
  <label for="username">Username:</label>
  <input
    type="text"
    id="username"
    name="username"
    minlength="5"
    maxlength="15"
    required
  />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="phone">Phone:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />

  <input type="submit" value="Submit" />
</form>
```

Explanation:

- required: Ensures fields are not left empty.
- minlength="5": The username must be at least 5 characters long.
- maxlength="15": The username cannot exceed 15 characters.
- `pattern="[0-9]{10}"`: Ensures that the phone number matches the 10-digit format (e.g., 1234567890).

## 4. Customizing Validation Messages

HTML5 allows you to set custom messages for validation errors using the setCustomValidity() method in JavaScript. However, the built-in validation attributes already provide some helpful messages by default.

Example:

```html
Copy code
<form action="/submit-form" method="POST">
  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    oninvalid="this.setCustomValidity('Please enter a valid email address')"
    oninput="setCustomValidity('')"
  />

  <input type="submit" value="Submit" />
</form>
```

In this example:

oninvalid: Sets a custom message if the input is invalid.
oninput: Resets the custom validity when the user starts typing again.

## 5. Disabling Browser Autocomplete

Sometimes, you may want to disable the browser's automatic suggestions for form fields. You can do this by using the autocomplete attribute.

Example:

```html
Copy code
<form action="/submit-form" method="POST" autocomplete="off">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" autocomplete="off" />

  <input type="submit" value="Submit" />
</form>
```

## 6. Form Validation Feedback with novalidate

If you want to turn off the browser’s automatic validation (for example, when using custom JavaScript validation), you can use the novalidate attribute.

Example:

```html
Copy code
<form action="/submit-form" method="POST" novalidate>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <input type="submit" value="Submit" />
</form>
```

### Pattern in Inputs

The pattern attribute in an HTML `<input>` element allows you to define a regular expression that the input value must match. This is particularly useful for creating custom validation for fields such as phone numbers, postal codes, or custom formats like usernames.

Usage of pattern Attribute

```html
Copy code
<input type="text" name="username" pattern="[a-zA-Z0-9]{5,12}" required />
```

Explanation:
`[a-zA-Z0-9]`: Allows uppercase letters (A-Z), lowercase letters (a-z), and numbers (0-9).
{5,12}: Specifies that the input must be between 5 and 12 characters long.
required: Ensures the field cannot be left empty.
If the user submits the form with an input value that doesn't match the pattern, the browser will prevent submission and show a validation message.

**Common Examples of pattern**:

- Phone Number (10 digits)

````html
Copy code <input type="tel" name="phone" pattern="[0-9]{10}" required />``` This
ensures that the phone number contains exactly 10 digits. - Postal Code (5
digits or 9 digits with hyphen) ```html Copy code
<input type="text" name="zipcode" pattern="[0-9]{5}(-[0-9]{4})?" required />```
This allows either a 5-digit postal code or a 9-digit postal code with a hyphen
(e.g., 12345 or 12345-6789). - Custom Username (Alphanumeric, 5 to 15
characters) ```html Copy code
<input type="text" name="username" pattern="[a-zA-Z0-9]{5,15}" required />```
This allows only alphanumeric characters, with a length of 5 to 15 characters. -
Date in YYYY-MM-DD Format ```html Copy code
<input type="text" name="date" pattern="\d{4}-\d{2}-\d{2}" required />``` This
pattern ensures that the date format is YYYY-MM-DD.
````
