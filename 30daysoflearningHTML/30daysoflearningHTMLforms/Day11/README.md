# Day 11: Hidden Inputs
Today, we will explore hidden inputs, a special type of input used to store information that is not visible to the user but is still submitted with the form. Hidden inputs are useful for passing along values that are necessary for the form's backend processing but do not require user interaction. Although hidden inputs don’t have a visual representation, accessibility still matters in ensuring the form works as intended for all users.

### Goals for Day 11:
Learn the HTML structure for hidden inputs.
Understand common use cases for hidden inputs.
Ensure hidden inputs contribute to accessibility and proper form handling.
Explore alternatives to hidden inputs for data storage.

## 1. Hidden Input Basics
The `<input type="hidden">` element is used to create a hidden input field. This field holds data that users can’t see or modify directly in the form but will be submitted to the server when the form is submitted.

Here’s the basic structure of a hidden input:

```html
Copy code
<form>
  <input type="hidden" name="userID" value="12345">
  <!-- Visible fields go here -->
  <input type="submit" value="Submit">
</form>
```
## 2. Common Use Cases for Hidden Inputs
Hidden inputs are used when you need to pass extra information from the frontend to the backend without the user seeing it. Common use cases include:

- User IDs: Storing a user’s ID to associate the form submission with their account.
- Session Tokens: Passing along session or authentication tokens.
- Preselected Values: Storing values for items that the user previously selected or were generated dynamically.
- CSRF Tokens: Providing security tokens to protect against Cross-Site Request Forgery (CSRF) attacks.
Example:

```html
Copy code
<form>
  <input type="hidden" name="csrf_token" value="abc123">
  <label for="comment">Comment:</label>
  <textarea id="comment" name="comment"></textarea>
  <input type="submit" value="Submit">
</form>

```
## 3. Accessibility Considerations
Hidden inputs themselves don’t have direct accessibility implications because they aren’t meant to be interacted with by users. However, they contribute to the overall functionality of the form. To ensure accessibility:

- Proper Labeling for Associated Inputs: Ensure that the hidden inputs serve a legitimate function in the backend processing, such as carrying necessary tokens or user information.
- ARIA and Hidden Inputs: Hidden inputs don’t require ARIA attributes because they are not visible or interactive for the user. However, ensure the rest of the form is fully accessible.

## 4. Alternatives to Hidden Inputs
In modern web development, there are other ways to store or pass data that do not involve hidden inputs:

- LocalStorage/SessionStorage: For data that doesn’t need to be sent directly with the form but stored locally for the session or across visits.
- Query Parameters: Use the URL to pass information if appropriate for the context.
- JavaScript: Dynamically append data to forms before submission using JavaScript, especially for complex, client-side validation.
Example using JavaScript to add a hidden input:

```html
Copy code
<form id="myForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <input type="submit" value="Submit">
</form>

<script>
  const form = document.getElementById('myForm');
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'userID';
  hiddenInput.value = '67890'; // Value could be dynamically set

  form.appendChild(hiddenInput);
</script>
```
---

### Task for Today:
- Create a form that includes hidden inputs (e.g., user ID, CSRF token) alongside visible form fields.
- Use JavaScript to dynamically add hidden inputs if needed.
- Understand the backend logic and why hidden inputs are used to pass data securely.

---
That concludes Day 11! By the end of today, you will have a solid understanding of how and why hidden inputs are used in forms, how to handle them securely, and some alternatives for passing data.