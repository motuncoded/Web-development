### Day 8: Select Dropdown

#### **Task:**
Create an HTML form that includes a dropdown menu (select element) allowing users to select their country.

#### **Objective:**
- Learn how to create a dropdown menu using the `<select>` and `<option>` elements.
- Understand how to associate a label with the dropdown for accessibility.

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Select Dropdown Example</title>
</head>
<body>

  <form action="/submit" method="POST">
    <label for="country">Choose your country:</label>
    <select id="country" name="country" required>
      <option value="" disabled selected>Select a country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
      <option value="au">Australia</option>
    </select>
    
    <input type="submit" value="Submit">
  </form>

</body>
</html>
```

#### **Key Elements:**

- **`<select>`**: Creates a dropdown menu where users can select an option.
- **`<option>`**: Defines the individual choices within the dropdown.
- **`<label>`**: Associates a text description with the dropdown for accessibility.
- **`required`**: Ensures the user must select an option before submitting the form.

#### **Best Practices:**
- Use the `disabled` and `selected` attributes in the first option to create a default placeholder.
- Always use labels to improve form accessibility for users with assistive technologies.