### Day 13: Time Input

#### **Objective:**

Learn how to use the `<input>` element with `type="time"` to allow users to select a time in an HTML form.

- **Tasks:**
  - Create an input field for selecting time.
  - Explore attributes such as `min`, `max`, and `step` to control time selection.
  - Understand how to format the time input and ensure accessibility.

#### **Example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Time Input Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="appointment-time">Select a time for your appointment:</label>
      <input
        type="time"
        id="appointment-time"
        name="appointment-time"
        min="09:00"
        max="18:00"
        required
      />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

#### **Key Elements:**

- **`<input type="time">`**: Creates an input field that allows users to select a time.
- **`min` and `max`**: Set the earliest and latest times that can be selected (in 24-hour format). In the example above, users can select times between 9:00 AM and 6:00 PM.
- **`required`**: Ensures that the time field is filled before form submission.

#### **Attributes:**

- **`step`**: Defines the intervals at which times can be selected. For example, `step="900"` would allow selection at 15-minute intervals (900 seconds).

```html
<input type="time" id="meeting-time" name="meeting-time" step="900" />
```

#### **Best Practices:**

- Always use clear and descriptive labels to ensure the purpose of the time input is clear to users.
- Use appropriate `min` and `max` values to limit the time input to a valid range for your use case.
- Make sure the input is accessible, especially for screen readers, by associating it with a label.
