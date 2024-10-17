### Day 8: Select Dropdown

#### **Objective:**

Learn how to create and use the `<select>` dropdown element in an HTML form.

- **Tasks:**
  - Create a dropdown menu using the `<select>` element.
  - Understand how to add options to a dropdown using `<option>`.
  - Explore how to set default options and validate user selection.
  - **Resource:** [HTML Select Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

#### **Example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select Dropdown Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="language">Choose a programming language:</label>
      <select id="language" name="language" required>
        <option value="" disabled selected>Select a language</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="ruby">Ruby</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

#### **Key Elements:**

- **`<select>`**: The container that holds the options for the dropdown.
- **`<option>`**: Each individual option that users can select from the dropdown.
- **`disabled` and `selected`**: The first option serves as a placeholder and is unselectable to guide users.
- **`required`**: Ensures the user selects an option before submitting the form.

#### **Best Practices:**

- Use a default placeholder option (e.g., `"Select a language"`) to prompt user interaction.
- Always provide labels for the dropdown to improve accessibility and context.
- Use the `required` attribute to enforce that a selection is made before the form is submitted.
