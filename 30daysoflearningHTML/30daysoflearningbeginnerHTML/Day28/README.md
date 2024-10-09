# Day 28: HTML and CSS Integration

HTML and CSS are the foundational languages for creating web pages. HTML structures the content, while CSS styles and visually enhances it. Integrating HTML with CSS allows for the creation of well-designed, visually appealing, and responsive websites.

Today, we’ll focus on how HTML and CSS work together and how to implement them in different ways.

## 1. CSS Integration Methods

There are three primary ways to integrate CSS into HTML:

### a. Inline CSS

Inline CSS is written directly inside the HTML element using the style attribute. This method is useful for applying quick, unique styles to individual elements but can make the HTML code harder to maintain.

Example:

```html
Copy code
<p style="color: blue; font-size: 20px;">This is an inline-styled paragraph.</p>
```

### b. Internal CSS (in the `<style>` tag)

Internal CSS is placed inside the `<head>` section of the HTML document within a `<style>` tag. This method is useful when you need to style a single page without linking an external CSS file.

Example:

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Internal CSS Example</title>
    <style>
      body {
        background-color: #f0f0f0;
      }
      h1 {
        color: green;
      }
      p {
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This page uses internal CSS for styling.</p>
  </body>
</html>
```

### c. External CSS (linked stylesheet)

External CSS is the most common and scalable method. You place your styles in a separate .css file and link to it from the HTML document. This allows you to reuse the same stylesheet across multiple pages.

Example:
HTML file (index.html):

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
    <p>This page is styled using an external CSS file.</p>
  </body>
</html>
```

CSS file (styles.css):

```css
Copy code body {
  background-color: #f9f9f9;
}

h1 {
  color: #ff5733;
  font-family: Arial, sans-serif;
}

p {
  font-size: 16px;
  line-height: 1.5;
}
```

## 2. CSS Selectors and Properties

CSS selectors are used to target HTML elements for styling. Properties are applied to define how those elements should be displayed.

### a. Basic Selectors

- Element Selector: Targets all instances of an HTML element.

```css
Copy code p {
  color: blue;
}
```

- Class Selector: Targets elements with a specific class.

```css
Copy code .intro {
  font-weight: bold;
}
```

- ID Selector: Targets a single element with a specific ID.

```css
Copy code #main-heading {
  text-align: center;
}
```

b. Example:

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Selectors Example</title>
    <style>
      h1 {
        color: purple;
      }
      .highlight {
        background-color: yellow;
      }
      #footer {
        font-size: 14px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Heading with Element Selector</h1>
    <p class="highlight">
      This paragraph uses a class selector for highlighting.
    </p>
    <p id="footer">This is a footer using an ID selector.</p>
  </body>
</html>
```

## 3. CSS Layout Techniques

When integrating CSS with HTML, controlling the layout of a page is a critical skill. There are several modern techniques for laying out elements:

### a. Flexbox

Flexbox provides a one-dimensional layout model, making it easier to align items within a container along a row or column.

Example:

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flexbox Example</title>
    <style>
      .container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
      }
      .box {
        width: 100px;
        height: 100px;
        background-color: lightcoral;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </div>
  </body>
</html>
```

### b. CSS Grid

CSS Grid is a two-dimensional layout system that allows for more complex layouts, such as grids and overlapping elements.

Example:

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid Example</title>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 10px;
      }
      .grid-item {
        background-color: lightblue;
        padding: 20px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item">Item 1</div>
      <div class="grid-item">Item 2</div>
      <div class="grid-item">Item 3</div>
    </div>
  </body>
</html>
```

## 4. Responsive Design

Making web pages responsive means they adapt to different screen sizes, improving user experience across devices.

### a. Media Queries

Media queries allow you to apply different styles depending on the size of the user’s device.

Example:

```css
Copy code
/* Desktop styles */
body {
  background-color: lightgray;
}

/* Mobile styles */
@media (max-width: 768px) {
  body {
    background-color: white;
  }
}
```

## 5. Conclusion

Integrating HTML and CSS is essential for creating visually compelling and functional web pages. With different methods to apply CSS, effective use of selectors, and layout techniques like Flexbox and Grid, you can craft web pages that are well-structured and responsive.
