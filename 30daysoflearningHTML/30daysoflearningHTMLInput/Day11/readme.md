### Day 11: Color Input

#### **Task:**

Create an HTML form that includes a color picker input, allowing users to select a color.

#### **Objective:**

- Learn how to use the `<input>` element with `type="color"` to allow users to choose a color.
- Understand how to provide a label for accessibility.

#### **Example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Input Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label for="favcolor">Pick your favorite color:</label>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000" />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

#### **Key Elements:**

- **`<input type="color">`**: Creates a color picker input field where users can choose a color.
- **`value`**: The default color value (set to red `#ff0000` in this example).
- **`label`**: Ensures the color picker is accessible by linking it with a clear description.

#### **Best Practices:**

- Use a default color value that makes sense for your form context.
- Always associate a label with the color picker input for better accessibility, especially for screen reader users.
