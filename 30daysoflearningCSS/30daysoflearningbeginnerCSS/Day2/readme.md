### Day 2: Setting Up CSS

#### **Objective:**
Learn the different methods to include CSS in an HTML document and set up your first CSS stylesheet for your web projects.

---

### **Key Concepts:**

1. **Three Ways to Include CSS in HTML:**
   CSS can be added to an HTML document using three different methods:

   1. **Inline CSS:**
      - CSS is added directly to the HTML element using the `style` attribute.
      - Best for styling a single element, but not recommended for large projects.

      ```html
      <p style="color: red; font-size: 18px;">This is an inline CSS example.</p>
      ```

   2. **Internal CSS:**
      - CSS rules are added within a `<style>` tag inside the `<head>` section of an HTML document.
      - Useful for small projects or styling a single page, but doesn't allow for reusability across multiple pages.

      ```html
      <head>
        <style>
          p {
            color: blue;
            font-size: 18px;
          }
        </style>
      </head>
      ```

   3. **External CSS:**
      - CSS is written in a separate file with a `.css` extension. This file is linked to the HTML document using a `<link>` tag inside the `<head>` section.
      - This is the most common and efficient method, allowing you to use the same stylesheet across multiple web pages.

      ```html
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      ```

      Example `styles.css` file:
      ```css
      body {
        background-color: #f4f4f4;
      }
      p {
        color: green;
        font-size: 18px;
      }
      ```

2. **Linking External CSS:**
   To link an external CSS file, use the `<link>` element with the `rel` attribute set to `"stylesheet"` and the `href` attribute pointing to the path of the CSS file.

   ```html
   <link rel="stylesheet" href="styles.css">
   ```

   - The `href` attribute specifies the path to your CSS file.
   - You can link multiple external CSS files by adding multiple `<link>` tags, each pointing to a different file.

3. **CSS File Naming:**
   When naming your CSS file, it's common practice to use lowercase letters, dashes, or underscores to separate words, such as `styles.css`, `main.css`, or `theme.css`. Avoid using spaces or special characters in file names.

4. **The Importance of External CSS:**
   - **Reusability:** The same stylesheet can be used across multiple HTML files, reducing repetition and making it easier to maintain your site.
   - **Scalability:** External CSS makes it easier to manage the styles for large websites with many pages.
   - **Separation of Concerns:** It helps keep the HTML document focused on structure while keeping styles in a separate file.

---

### **Example:**

Here’s an example of how to set up and link an external CSS file:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Setup Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>Welcome to CSS</h1>
  <p>This is a paragraph styled with an external CSS file.</p>

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  background-color: #e0f7fa;
  font-family: Arial, sans-serif;
}

h1 {
  color: #00796b;
  text-align: center;
}

p {
  color: #004d40;
  font-size: 20px;
  line-height: 1.6;
}
```

In this example:
- The HTML file links to the `styles.css` file to style the page.
- The CSS file defines the background color, font family, and styles for headings and paragraphs.

---

### **Benefits of External CSS:**
- **Maintainability:** You can update the design of multiple pages by editing a single CSS file.
- **Separation of Content and Style:** Keeps the HTML file clean and focused on structure, while the CSS file handles design and layout.
- **Caching:** Browsers can cache external CSS files, leading to faster page load times.

---

### **Next Steps:**
Tomorrow, we'll explore CSS selectors in more detail and learn how to target specific elements in your HTML document.

---

### **Resources:**
- [MDN Web Docs - How CSS Is Structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)
- [W3Schools - CSS](https://www.w3schools.com/css/)