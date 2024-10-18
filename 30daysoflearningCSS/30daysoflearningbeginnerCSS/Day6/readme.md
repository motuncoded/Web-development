### Day 6: Text Styling

#### **Objective:**
Learn how to apply various text styles using CSS to enhance the appearance of text on a webpage.

---

### **Key Concepts:**

1. **Font Properties:**
   CSS provides several properties to control font styles, including:

   - **`font-family`**: Specifies the typeface of the text. You can use web-safe fonts, custom fonts, or fonts loaded from services like Google Fonts.
   - **`font-size`**: Defines the size of the text. You can use different units like pixels (`px`), ems (`em`), or rems (`rem`).
   - **`font-weight`**: Controls the thickness of the text. Common values are `normal`, `bold`, `bolder`, and numerical values like `400` (normal) and `700` (bold).
   - **`font-style`**: Allows you to apply italic or oblique styles to the text using values like `normal`, `italic`, or `oblique`.
   - **`text-transform`**: Changes the casing of the text. You can set it to `uppercase`, `lowercase`, or `capitalize`.

   **Example:**
   ```css
   h1 {
     font-family: 'Arial', sans-serif;
     font-size: 36px;
     font-weight: bold;
     font-style: italic;
     text-transform: uppercase;
   }
   ```

2. **Text Alignment:**
   You can align text using the `text-align` property:

   - `left`: Aligns the text to the left.
   - `right`: Aligns the text to the right.
   - `center`: Centers the text.
   - `justify`: Justifies the text, adjusting spacing to align both edges.

   **Example:**
   ```css
   p {
     text-align: center;
   }
   ```

3. **Line Height and Letter Spacing:**
   These properties help control the spacing and readability of text.

   - **`line-height`**: Sets the height of each line of text, which affects the vertical spacing between lines. It can be defined in units (e.g., `1.5`, `20px`).
   - **`letter-spacing`**: Controls the space between characters. Positive values increase spacing, while negative values decrease it.

   **Example:**
   ```css
   p {
     line-height: 1.6;
     letter-spacing: 1px;
   }
   ```

4. **Text Decoration:**
   Use the `text-decoration` property to add or remove decorations like underline, overline, or strikethrough.

   **Example:**
   ```css
   a {
     text-decoration: none; /* Removes underline from links */
   }
   ```

5. **Color and Background Color:**
   You can change the text color and background using the `color` and `background-color` properties.

   **Example:**
   ```css
   h2 {
     color: #333;
     background-color: #f0f0f0;
   }
   ```

6. **Text Shadow:**
   The `text-shadow` property adds shadow effects to text. It accepts values for horizontal offset, vertical offset, blur radius, and color.

   **Example:**
   ```css
   h1 {
     text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
   }
   ```

---

### **Example:**

Here’s an example of how to apply various text styles to create a visually appealing webpage:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Styling Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header>
    <h1>Welcome to Text Styling</h1>
    <p>Learn how to style text using CSS to improve the presentation of your website.</p>
  </header>

  <section>
    <h2>Text Properties</h2>
    <p>This paragraph demonstrates the application of various text styles in CSS.</p>
    <p class="highlight">This is an important message highlighted for emphasis.</p>
  </section>

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 36px;
  color: #00796b;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

h2 {
  font-size: 24px;
  color: #333;
  margin-top: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  color: #555;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

In this example:
- The header contains an `h1` and a `p` element, styled for visibility.
- Different colors, font sizes, and text shadows are applied to headings and paragraphs.
- A `.highlight` class is used to emphasize important text.

---

### **Next Steps:**
Tomorrow, we will explore how to work with colors and backgrounds to further enhance the visual appeal of your designs.

---

### **Resources:**
- [MDN Web Docs - CSS Text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text)
- [W3Schools - CSS Text](https://www.w3schools.com/css/css_text.asp)