### Day 14: Week Input

#### **Objective:**

Learn how to use the `<input>` element with `type="week"` to allow users to select a specific week in an HTML form.

- **Tasks:**
  - Create an input field for selecting a week.
  - Explore the usage of attributes such as `min` and `max` to control the range of weeks.
  - Understand how to ensure accessibility and validate the user's input.

#### **Example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Week Input Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="week-selection">Select a week for your event:</label>
      <input
        type="week"
        id="week-selection"
        name="event-week"
        min="2024-W01"
        max="2024-W52"
        required
      />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

#### **Key Elements:**

- **`<input type="week">`**: Creates an input field that allows users to select a specific week, where the format is `YYYY-W##` (e.g., `2024-W05` for the 5th week of 2024).
- **`min` and `max`**: Restrict the selection to a specific range of weeks. In this example, users can only select weeks within the year 2024.
- **`required`**: Ensures that a valid week must be selected before submitting the form.

#### **Attributes:**

- **`value`**: You can set a default selected week by specifying the `value` attribute (e.g., `value="2024-W10"`).

```html
<input type="week" id="week" name="week" value="2024-W10" />
```

#### **Best Practices:**

- Ensure that your label is descriptive to help users understand the purpose of the week selection.
- Validate the range of weeks to prevent users from selecting invalid weeks based on the context of your form.
- Use `min` and `max` to restrict the input to only the relevant time period (e.g., weeks of a particular year).
