### Day 1: What is CSS?

#### **Objective:**
Understand the basics of CSS (Cascading Style Sheets) and how it is used to style and layout web pages.

---

### **Key Concepts:**

1. **Definition of CSS:**
   CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation of HTML elements on a web page. CSS controls the layout, colors, fonts, spacing, and overall look of a website.

2. **How CSS Works:**
   CSS is applied to HTML elements to define how they should be displayed. You can apply CSS in three ways:
   - **Inline CSS:** CSS is applied directly to HTML elements using the `style` attribute.
   - **Internal CSS:** CSS rules are written inside the `<style>` tag within the `<head>` section of the HTML document.
   - **External CSS:** CSS rules are written in a separate `.css` file and linked to the HTML document using the `<link>` element.

3. **The Cascade:**
   CSS follows a set of rules known as the **cascade** to determine which styles to apply when multiple conflicting styles are defined. This includes:
   - **Specificity:** More specific selectors (e.g., ID selectors) take precedence over less specific selectors (e.g., class selectors).
   - **Source order:** Later styles override earlier ones if they have the same specificity.
   - **Inheritance:** Some CSS properties can be inherited by child elements from their parent elements.

4. **Selectors:**
   Selectors are patterns used to target HTML elements to apply styles. Common selectors include:
   - **Element selectors:** Targets all instances of a particular HTML tag (e.g., `p { color: red; }`).
   - **Class selectors:** Targets elements with a specific class attribute (e.g., `.box { margin: 10px; }`).
   - **ID selectors:** Targets a single element with a specific ID attribute (e.g., `#header { background-color: blue; }`).

5. **Basic CSS Syntax:**
   CSS is written in the following syntax:

   ```css
   selector {
     property: value;
   }
   ```

   Example:

   ```css
   p {
     color: blue;
     font-size: 16px;
   }
   ```

---

### **Example:**

Here’s how CSS can be used to style a simple HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    h1 {
      color: #333;
      text-align: center;
    }
    p {
      color: #555;
      font-size: 18px;
      line-height: 1.6;
    }
  </style>
</head>
<body>

  <h1>Welcome to CSS</h1>
  <p>This is a basic example of CSS in action. We are styling the text and background of this webpage using CSS.</p>

</body>
</html>
```

In this example, we:
- Set the background color of the page.
- Changed the font family for the entire document.
- Styled the heading and paragraph with different colors and font sizes.

---

### **Benefits of CSS:**
- **Separation of content and design:** HTML is used for content structure, while CSS is used for styling, allowing better maintainability.
- **Reusability:** CSS can be applied to multiple web pages, reducing repetition.
- **Responsive design:** CSS enables layouts that adapt to different screen sizes.

---

### **Resources:**
- [MDN Web Docs - Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
- [W3Schools - CSS Tutorial](https://www.w3schools.com/css/)

---

