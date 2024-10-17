### Day 15: Month Input

#### **Objective:**

Learn how to use the `<input>` element with `type="month"` to allow users to select a specific month and year in an HTML form.

- **Tasks:**
  - Create an input field for selecting a month and year.
  - Use attributes like `min` and `max` to restrict the selection to a range of months.
  - Ensure accessibility by using clear labels and form validation.

---

#### **Example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Month Input Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="billing-month">Select a billing month:</label>
      <input
        type="month"
        id="billing-month"
        name="billing-month"
        min="2023-01"
        max="2025-12"
        required
      />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

#### **Key Elements:**

- **`<input type="month">`**: Creates a month picker input that allows users to select both the month and year. The format is `YYYY-MM` (e.g., `2024-10` for October 2024).
- **`min` and `max`**: Restrict the range of months users can choose. In this example, users can only select months between January 2023 and December 2025.
- **`required`**: Ensures that a valid month must be selected before submitting the form.

#### **Attributes:**

- **`value`**: Sets a default month when the form loads.

```html
<input type="month" id="start-month" name="start-month" value="2024-10" />
```

---

#### **Best Practices:**

- Always include clear labels that explain what the month selection is for (e.g., "Select a billing month").
- Use the `min` and `max` attributes to guide users to select valid dates within your specified range.
- Ensure the input is accessible, and validate on the client and server sides to ensure correct formatting.
