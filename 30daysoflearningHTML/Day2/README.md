# Day 2: Headings, Paragraphs, and Line Breaks

## Concepts and Explanation
On **Day 2**, we explore how to structure text using headings, paragraphs, and line breaks in HTML. These elements are essential for organizing content and ensuring it's displayed correctly on a webpage.

### 1. Headings (`<h1>` to `<h6>`)
Headings define the importance and structure of your content. HTML provides six levels of headings:
- **`<h1>`**: The most important heading, used for the main title of the page.
- **`<h2>`** to **`<h6>`**: Subheadings for organizing content, each progressively smaller.

### 2. Paragraphs (`<p>`)
The `<p>` tag defines a block of text as a paragraph. It's a block-level element that automatically adds space before and after the text, making it easier to read.

### 3. Line Breaks (`<br>`)
The `<br>` tag is used to force a line break within a paragraph without starting a new one. This tag is self-closing and doesn't need a closing tag.

---

## Key Elements
- **`<h1>` to `<h6>`**: Defines heading levels from the most important (`<h1>`) to the least important (`<h6>`).
- **`<p>`**: Defines a paragraph of text.
- **`<br>`**: Inserts a line break within a paragraph.

---

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 2 - Text Formatting</title>
</head>
<body>
    <h1>Main Heading (h1)</h1>
    <p>This is a paragraph of text under the main heading. Paragraphs contain blocks of text and automatically add space before and after themselves.</p>

    <h2>Subheading (h2)</h2>
    <p>This is another paragraph under the second-level heading. This helps to break up the content and improve readability.</p>

    <h3>Sub-subheading (h3)</h3>
    <p>You can add more subheadings to organize content in a logical structure. Notice how each heading becomes smaller in size.</p>

    <p>This paragraph uses a line break.<br>Here is the second line of the same paragraph after the break.</p>

    <h4>Subheading (h4)</h4>
    <p>More content goes here, under an even smaller subheading.</p>

    <h5>Subheading (h5)</h5>
    <p>Subheadings continue to shrink as you use lower-level heading tags.</p>

    <h6>Subheading (h6)</h6>
    <p>This is the smallest heading level in HTML.</p>
</body>
</html>
```
