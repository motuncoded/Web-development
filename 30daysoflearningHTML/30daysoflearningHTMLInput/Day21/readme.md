### Day 21: Basic CSS for Inputs

#### **Objective:**

Learn how to style form inputs using basic CSS techniques. Understand how to make inputs visually appealing, improve the user experience, and ensure consistency across different input types.

---

#### **Tasks:**

- Style text inputs, textareas, and buttons using CSS.
- Adjust padding, borders, and backgrounds for better visual appeal.
- Learn how to create focus states to improve user experience.
- Ensure accessibility through color contrast and clear visual cues.

---

#### **Key Concepts:**

1. **Styling Text Inputs:**

   - Text inputs should have a clear, defined border and padding for user comfort.
   - Use CSS to create consistent styles across all inputs and browsers.

   ```css
   input[type="text"],
   input[type="email"],
   input[type="password"],
   textarea {
     width: 100%;
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 4px;
     font-size: 16px;
   }

   input[type="text"]:focus,
   input[type="email"]:focus,
   input[type="password"]:focus,
   textarea:focus {
     border-color: #007bff;
     outline: none;
     box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
   }
   ```

   - **Border and Padding**: Give the input fields enough space for typing and ensure the border is visible and styled.
   - **Focus State**: Enhance user experience by changing the input border color and adding a shadow when the input is focused.

2. **Styling Buttons:**

   - Buttons should be easily recognizable and styled to indicate that they are clickable.
   - Use hover and active states to provide visual feedback when users interact with buttons.

   ```css
   button,
   input[type="submit"] {
     background-color: #007bff;
     color: white;
     padding: 10px 15px;
     border: none;
     border-radius: 4px;
     cursor: pointer;
     font-size: 16px;
   }

   button:hover,
   input[type="submit"]:hover {
     background-color: #0056b3;
   }

   button:active,
   input[type="submit"]:active {
     background-color: #003d80;
   }
   ```

   - **Hover Effects**: Change the button background color on hover to provide feedback that it is clickable.
   - **Active State**: Further darken the button color when clicked to show interaction.

3. **Styling Textareas:**

   - Textareas should be styled similarly to text inputs but may require additional height.

   ```css
   textarea {
     min-height: 150px;
     resize: vertical; /* Allows resizing only vertically */
   }
   ```

   - **Resize Property**: You can control whether the textarea is resizable. Allowing vertical resizing gives users flexibility without breaking the layout.

4. **Accessible Focus States:**

   - Ensure focus states are highly visible to improve accessibility for users navigating via keyboard.

   ```css
   input:focus,
   textarea:focus,
   button:focus {
     outline: 2px solid #007bff;
   }
   ```

5. **Improving User Experience:**

   - Use subtle animations to create a smoother interaction experience.

   ```css
   input,
   button,
   textarea {
     transition: all 0.2s ease;
   }
   ```

6. **Error States:**

   - Use CSS to indicate when an input is invalid, either through validation or user input errors.

   ```css
   input:invalid {
     border-color: #dc3545;
   }

   input:invalid:focus {
     box-shadow: 0 0 5px rgba(220, 53, 69, 0.5);
   }
   ```

   - **Invalid State**: Highlight invalid inputs with a red border to make errors clear to the user.

---

#### **Example: Basic Styled Form with Inputs**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styled Form</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
      }

      form {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin: auto;
      }

      label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
      }

      input[type="text"],
      input[type="email"],
      input[type="password"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        transition: border-color 0.2s;
      }

      input[type="text"]:focus,
      input[type="email"]:focus,
      input[type="password"]:focus,
      textarea:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }

      button,
      input[type="submit"] {
        background-color: #007bff;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover,
      input[type="submit"]:hover {
        background-color: #0056b3;
      }

      button:active,
      input[type="submit"]:active {
        background-color: #003d80;
      }
    </style>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

---

#### **Explanation:**

- **Form Layout**: The form is styled with a white background and subtle shadow to make it stand out on the page.
- **Inputs**: All input fields are styled to be consistent in size, padding, and focus effects.
- **Focus States**: When the user focuses on an input, the border color changes to blue, and a subtle shadow appears, enhancing the interaction experience.
- **Button Styling**: The submit button has a distinct color and hover effects, ensuring it's clear that the button is clickable.

---

#### **Best Practices:**

- Ensure that input fields are large enough and have sufficient padding for easy interaction.
- Use clear and contrasting colors for focus states and error states to provide users with visual feedback.
- Keep form designs simple and consistent across all input types to maintain a cohesive user experience.

By applying basic CSS styling to form inputs, you can create a visually appealing and user-friendly experience while ensuring that accessibility and usability remain priorities.
