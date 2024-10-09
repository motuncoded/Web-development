# Day 1: Introduction to HTML Structure

What is HTML?
HTML is a markup language, not a programming language. It uses tags to define and structure different parts of a webpage. These tags tell the web browser how to display content, making it possible to create visually appealing and organized websites.

## Concepts and Explanation

On **Day 1**, you will learn the basic structure of an HTML document. Understanding the core elements that make up a simple webpage is crucial for building web applications.

### 1. `<!DOCTYPE html>`

The `<!DOCTYPE html>` declaration defines the document type and version of HTML (HTML5 in this case). It ensures that the browser renders the page correctly.

### 2. `<html>` Element

The `<html>` tag wraps all content on the page. It is the root element of any HTML document and tells the browser where the HTML content begins and ends.

### 3. `<head>` Element

The `<head>` tag contains meta-information about the webpage. This can include things like the character set, title, links to stylesheets, and more. It includes:

- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Ensures the page is responsive on all devices.
- **`<meta charset="UTF-8">`**: Specifies the character encoding for the document. UTF-8 is the most common and supports almost all characters and symbols.
- **`<title>`**: Defines the title of the document, which appears in the browser tab.

### 4. `<body>` Element

The `<body>` tag contains all the content that will be displayed on the webpage, including text, images, links, etc.

---

## Key Elements

- **`<!DOCTYPE html>`**: Defines the document type.
- **`<html>`**: Root element that contains the entire HTML document.
- **`<head>`**: Contains meta-information about the document.
- **`<meta charset="UTF-8">`**: Defines the character set for the document.
- **`<title>`**: Specifies the title that appears in the browser tab.
- **`<body>`**: Contains the content of the webpage.

---

## Example Code

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 1 - HTML Structure</title>
  </head>
  <body>
    <h1>Welcome to Day 1 of Learning HTML</h1>
    <p>
      This is your first webpage! Today, we are learning about the basic
      structure of an HTML document.
    </p>
  </body>
</html>
```
