### Day 19: Custom Fonts

#### **Objective:**
Learn how to use custom fonts in web design to enhance the aesthetics and branding of your website.

---

### **What are Custom Fonts?**
Custom fonts allow you to use typography that is not limited to the default fonts available in web browsers. By using custom fonts, you can create a unique look for your site that aligns with your branding.

### **How to Use Custom Fonts:**

1. **Web Safe Fonts:**
   - These are fonts that are commonly available on most devices (e.g., Arial, Times New Roman). Using these ensures consistency across platforms but limits design choices.

2. **Web Fonts:**
   - You can use web fonts hosted on services like Google Fonts or Adobe Fonts, which provide a wide range of typefaces that can be easily integrated into your website.

3. **@font-face Rule:**
   - This CSS rule allows you to specify custom fonts that you host on your server. You can define various styles and formats to ensure compatibility across browsers.

### **Using Google Fonts:**

1. **Select a Font:**
   - Visit [Google Fonts](https://fonts.google.com) and choose a font you want to use. 

2. **Embed the Font:**
   - Google Fonts provides a link to embed the font in your HTML. Copy the `<link>` tag provided by Google.

**Example:**
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

3. **Apply the Font in CSS:**
   - Use the `font-family` property to apply the selected font to elements in your CSS.

**Example:**
```css
body {
  font-family: 'Roboto', sans-serif; /* Apply the custom font */
}
```

### **Using @font-face Rule:**

If you have a custom font file, you can use the `@font-face` rule to define it:

1. **Upload the Font Files:**
   - Upload your font files (e.g., .woff, .ttf, .otf) to your web server.

2. **Define the Font in CSS:**

**Example:**
```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/MyCustomFont.woff2') format('woff2'), /* Modern Browsers */
       url('fonts/MyCustomFont.woff') format('woff'); /* Older Browsers */
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'MyCustomFont', sans-serif; /* Apply the custom font */
}
```

### **Example:**

Here’s a simple example demonstrating the use of a custom font:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Fonts Example</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>Welcome to My Website</h1>
  <p>This is a paragraph styled with a custom font.</p>

</body>
</html>
```

**CSS (styles.css):**
```css
body {
  font-family: 'Roboto', sans-serif; /* Apply the custom font */
  margin: 20px;
  line-height: 1.6;
}

h1 {
  font-weight: 700; /* Bold weight */
}

p {
  font-weight: 400; /* Regular weight */
}
```

In this example:
- The `Roboto` font is imported from Google Fonts and applied to the body and text elements.
- The heading uses a bold weight while the paragraph uses a regular weight.

---

### **Next Steps:**
Tomorrow, we will explore text effects and how to create visually appealing typography through CSS.

---

### **Resources:**
- [Google Fonts](https://fonts.google.com)
- [MDN Web Docs - @font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [CSS Tricks - Custom Fonts](https://css-tricks.com/using-font-face/)