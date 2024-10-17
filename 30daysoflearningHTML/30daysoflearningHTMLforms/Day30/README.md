### Day 30: Final Project

Congratulations on reaching Day 30! Today, you will complete your learning journey by working on a final project that incorporates everything you've learned about form design, validation, accessibility, and submission handling. This project will help you solidify your understanding and demonstrate your skills.

---

#### Final Project Overview

For your final project, you will create a **Complete Registration System** that includes the following features:

- A user registration form with various input fields.
- Client-side validation for user inputs.
- Asynchronous form submission using AJAX.
- Server-side handling (using a mock server or simulated responses).
- User feedback upon submission (success or error).
- Accessibility considerations.

---

#### Project Requirements

1. **Form Fields**:

   - Name
   - Email
   - Password
   - Confirm Password
   - Accept Terms and Conditions
   - Submit Button

2. **Validation**:

   - Ensure all fields are required.
   - Validate the email format.
   - Ensure the password and confirm password fields match.
   - Check that the user accepts the terms and conditions.

3. **Submission Handling**:

   - Use the `fetch` API to submit the form data asynchronously.
   - Simulate server response (you can use tools like JSONPlaceholder, or create a mock server).

4. **User Feedback**:

   - Provide clear feedback to the user after form submission, indicating success or error.
   - Display error messages near the relevant fields if validation fails.

5. **Accessibility**:
   - Use semantic HTML elements and ARIA attributes to ensure the form is accessible.
   - Make sure the form is navigable via keyboard.

---

#### Implementation Steps

1. **Create the HTML Structure**:
   Build the HTML for your registration form, ensuring you use proper elements and attributes.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Registration</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <form id="registrationForm" aria-labelledby="formTitle">
      <h1 id="formTitle">User Registration</h1>

      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required aria-required="true" />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        aria-required="true"
      />

      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        aria-required="true"
      />

      <label for="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
        aria-required="true"
      />

      <label>
        <input type="checkbox" id="terms" name="terms" required />
        I accept the terms and conditions
      </label>

      <button type="submit">Register</button>
      <p id="feedbackMessage"></p>
    </form>

    <script src="script.js"></script>
  </body>
</html>
```

2. **Add Client-Side Validation**:
   Implement validation logic to ensure the data entered meets the required criteria.

```javascript
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsAccepted = document.getElementById("terms").checked;
    const feedbackMessage = document.getElementById("feedbackMessage");

    // Clear previous feedback
    feedbackMessage.textContent = "";

    // Validation
    if (!termsAccepted) {
      feedbackMessage.textContent = "You must accept the terms and conditions.";
      return;
    }
    if (password !== confirmPassword) {
      feedbackMessage.textContent = "Passwords do not match.";
      return;
    }
    if (!validateEmail(email)) {
      feedbackMessage.textContent = "Please enter a valid email address.";
      return;
    }

    // If validation passes, submit the form
    submitForm(name, email, password);
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function submitForm(name, email, password) {
  const formData = { name, email, password };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    // Mock server URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      document.getElementById("feedbackMessage").textContent =
        "Registration successful!";
      console.log("Success:", data);
    })
    .catch((error) => {
      document.getElementById("feedbackMessage").textContent =
        "Error during registration.";
      console.error("Error:", error);
    });
}
```

3. **Add Styling**:
   Create a CSS file to style your form and make it visually appealing.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

form {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin: 10px 0 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px 15px;
  background-color: #005fcc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #004bb5;
}

#feedbackMessage {
  margin-top: 15px;
  color: red; /* Error messages in red */
}
```

4. **Test Your Form**:
   Test your form in various browsers and devices to ensure everything works as expected. Check the following:
   - All validations trigger correctly.
   - Feedback messages display as intended.
   - Data submission works without errors.
   - The form is accessible and user-friendly.

---

#### Project Completion

By the end of Day 30, you will have a fully functional registration system that demonstrates your understanding of HTML forms, validation, accessibility, and AJAX submission. This final project not only consolidates your learning but also serves as a valuable addition to your portfolio.

---

### Next Steps

1. **Review Your Work**: Reflect on the entire course and identify areas where you excelled or would like to improve.
2. **Expand Your Project**: Consider adding more features to your form, such as additional fields, different types of validations, or even integrating it with a real backend service.
3. **Share Your Work**: Share your final project with peers or on platforms like GitHub to receive feedback and showcase your skills.

Congratulations again on completing your learning journey! Enjoy applying these skills in your future web development endeavors.
