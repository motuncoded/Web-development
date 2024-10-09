# Day 10: Forms and Input Fields

## Goal:

Learn the basics of creating forms in HTML, working with input fields, and understanding how to collect user data effectively.

---

## Topics to Cover:

1. **HTML Forms Basics**
   - `<form>` tag: Structure and purpose
   - Attributes: `action`, `method` (`GET` vs `POST`)
     action: The URL where the form data will be sent when submitted.
     method: The HTTP method used to send data (commonly "GET" or "POST").

### Basic structure for form

2. **Input Fields**

   - Common types:
     - `<input type="text">`, `<input type="email">`, `<input type="password">`, `<input type="number">`, etc.
   - Using labels with `for` attribute
   - Placeholder, required, and default values (`value` attribute)

3. **Grouping Fields:**

   - `<fieldset>` and `<legend>` for grouping related form elements

4. **Dropdowns and Selection**

   - `<select>` with `<option>`
   - Multiple selection with `multiple` attribute

5. **Radio Buttons and Checkboxes**

   - Difference between `<input type="radio">` and `<input type="checkbox">`
   - Grouping radios by name

6. **Buttons**

   - `<button>` vs `<input type="submit">` for submitting forms

7. **Form Validation**

   - HTML5 built-in validation: required, min, max, pattern
   - Real-time validation with `oninput` attribute

8. **Accessibility Considerations**
   - Associating labels with inputs
   - ARIA attributes for enhanced accessibility

---

## Practice Tasks:

1. **Task 1: Simple Contact Form**
   Create a basic contact form with the following fields:

   - Name
   - Email
   - Message (textarea)
   - Submit button

2. **Task 2: Survey Form**
   Build a small survey form that includes:

   - Age (number input)
   - Gender (radio buttons)
   - Hobbies (checkboxes)
   - Favorite color (dropdown)

3. **Task 3: Form with Validation**
   Extend the contact form by adding:
   - Required fields (name and email)
   - Proper validation for email input

---

## Resources:

- [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [W3Schools - HTML Input Types](https://www.w3schools.com/html/html_form_input_types.asp)
