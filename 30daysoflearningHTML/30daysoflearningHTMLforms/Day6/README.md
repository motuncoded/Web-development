### Day 6: Textarea Element

- Goal: Understand how to use the `<textarea>` element to create multi-line text input fields.
- Activity: Create a form that allows users to input longer text entries and explore customization options.

---

## 1. What is the `<textarea>` Element?

The `<textarea>` element is used to create a multi-line input field for longer text entries, unlike the `<input type="text">` which is single-line. It’s commonly used for comments, descriptions, feedback forms, and more.

### Basic Syntax:

```html
<textarea name="comments"></textarea>
```

---

## 2. Key Attributes of `<textarea>`

The `<textarea>` element comes with a variety of attributes to customize its behavior and appearance.

### a. `rows` Attribute

The `rows` attribute specifies the number of visible text lines in the `<textarea>`.

```html
<textarea name="comments" rows="4"></textarea>
```

This creates a `<textarea>` with 4 visible rows.

---

### b. `cols` Attribute

The `cols` attribute defines the visible width of the `<textarea>` in terms of the number of characters.

```html
<textarea name="comments" rows="4" cols="50"></textarea>
```

This example creates a `<textarea>` that is 50 characters wide and 4 lines tall.

---

### c. `placeholder` Attribute

The `placeholder` attribute displays a hint inside the `<textarea>`, providing guidance to the user about what kind of input is expected.

```html
<textarea name="comments" placeholder="Enter your comments here..."></textarea>
```

---

### d. `maxlength` Attribute

The `maxlength` attribute limits the number of characters the user can input into the `<textarea>`.

```html
<textarea name="comments" maxlength="500"></textarea>
```

In this example, the maximum number of characters the user can enter is limited to 500.

---

### e. `required` Attribute

The `required` attribute makes sure the `<textarea>` field must be filled in before form submission.

```html
<textarea name="comments" required></textarea>
```

---

### f. `readonly` and `disabled` Attributes\*\*

- `readonly`: The user can see the text but cannot edit it.
- `disabled`: The `<textarea>` is both uneditable and not selectable.

```html
<textarea name="comments" readonly>Read-only content</textarea>
<textarea name="comments" disabled>Disabled content</textarea>
```

---

## 3. Example of a Form with a `<textarea>` Field

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Textarea Example</title>
  </head>
  <body>
    <h1>Feedback Form</h1>

    <form action="/submit" method="POST">
      <label for="feedback">Your Feedback:</label><br />
      <textarea
        id="feedback"
        name="feedback"
        rows="5"
        cols="40"
        placeholder="Enter your feedback here..."
        required
      ></textarea
      ><br />

      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

### Explanation:

- The `<textarea>` has `rows="5"` and `cols="40"`, making it 5 lines tall and 40 characters wide.
- It also uses a `placeholder` attribute for guidance and the `required` attribute to ensure the user provides feedback.

---

## 4. Customizing the Size of `<textarea>` with CSS\*\*

You can also use CSS to style and control the size of the `<textarea>` beyond the `rows` and `cols` attributes.

```html
<style>
  textarea {
    width: 100%; /* Full width */
    height: 150px; /* Fixed height */
  }
</style>

<form>
  <label for="description">Description:</label><br />
  <textarea
    id="description"
    name="description"
    placeholder="Enter the description..."
  ></textarea
  ><br />

  <button type="submit">Submit</button>
</form>
```

### Explanation:

- In this example, CSS is used to make the `<textarea>` stretch to 100% of its container's width and to set a fixed height of 150 pixels.

---

## 5. Activity: Build a Form with a Textarea

### **Task:**

- Create a form that allows users to submit a **comment** or **feedback**.
- Use the `rows`, `cols`, and `placeholder` attributes to customize the appearance.
- Add validation using the `required` and `maxlength` attributes to limit the length of the comments.

---

### **Sample Form:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Comment Form</title>
  </head>
  <body>
    <h1>Leave a Comment</h1>

    <form action="/submit" method="POST">
      <label for="comment">Your Comment:</label><br />
      <textarea
        id="comment"
        name="comment"
        rows="6"
        cols="50"
        maxlength="200"
        placeholder="Type your comment here..."
        required
      ></textarea
      ><br />

      <button type="submit">Submit Comment</button>
    </form>
  </body>
</html>
```

### **Explanation:**

- This form includes a `<textarea>` for comments, with a maximum of 200 characters.
- The `required` attribute ensures the user provides input before submitting the form.

---

## **6. Advanced Usage: Dynamic Resizing with JavaScript**

You can also allow the `<textarea>` to dynamically resize based on the user's input. This can be done using JavaScript.

### **Example:**

```html
<script>
  function autoResize() {
    const textarea = document.getElementById("dynamic-textarea");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
</script>

<form>
  <label for="dynamic-textarea">Auto-Resizing Textarea:</label><br />
  <textarea
    id="dynamic-textarea"
    rows="4"
    oninput="autoResize()"
    placeholder="Type something..."
  ></textarea
  ><br />
</form>
```

### **Explanation:**

- The textarea resizes automatically as more content is typed into it. This is achieved by adjusting the height based on the `scrollHeight` of the element.

---

## **7. Best Practices for Using `<textarea>`**

- **Use Placeholders**: Provide clear guidance with placeholder text for better user experience.
- **Set Appropriate Sizes**: Customize the size of your `<textarea>` to suit the context of its use.
- **Limit Length**: Use the `maxlength` attribute to prevent excessively long submissions.
- **Consider Accessibility**: Always pair the `<textarea>` with a proper `<label>` for screen readers.

---

## **Next Steps:**

- Experiment with CSS to further customize the appearance of your `<textarea>`.
- Explore integrating JavaScript to enhance user interactions (e.g., auto-resize).
- Try adding validation messages for feedback forms using the `maxlength` attribute.

---

Happy coding!
