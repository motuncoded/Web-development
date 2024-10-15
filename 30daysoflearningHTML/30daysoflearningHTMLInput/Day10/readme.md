### Day 10: Textarea

#### **Task:**
Create an HTML form that includes a `<textarea>` element allowing users to input multi-line text, such as feedback or a message.

#### **Objective:**
- Learn how to create a multi-line text input field using the `<textarea>` element.
- Understand how to use attributes like `rows` and `cols` to control the size of the text area.

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Textarea Example</title>
</head>
<body>

  <form action="/submit" method="POST">
    <label for="message">Your Message:</label>
    <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message here..." required></textarea>
    
    <input type="submit" value="Submit">
  </form>

</body>
</html>
```

#### **Key Elements:**

- **`<textarea>`**: A multi-line text input element, typically used for longer input such as comments, messages, or descriptions.
- **`rows` and `cols`**: Controls the height (`rows`) and width (`cols`) of the textarea. The user can adjust the size as needed in most browsers.
- **`placeholder`**: Provides a hint to users about what they should type.
- **`required`**: Ensures that the textarea is filled before form submission.

#### **Best Practices:**
- Use clear and descriptive labels for text areas to enhance accessibility.
- Provide a `placeholder` attribute to give users a clear indication of what information is expected.