# Day 1: HTML Structure and Syntax
## Concepts and Explanation:
HTML (HyperText Markup Language) is the foundation of web development, defining the structure of web pages. It uses tags to describe elements, and these elements tell the browser how to display the content.

A valid HTML document has a specific structure, beginning with a document type declaration (<!DOCTYPE html>), followed by the main root element (<html>), which contains two important sections:

Head (<head>): Includes metadata about the webpage, such as the title, character encoding, and links to stylesheets or scripts.
Body (<body>): Contains the visible content of the webpage, such as headings, paragraphs, images, and links.
### Key Elements:
-- <!DOCTYPE html>: Defines the document type as HTML5, instructing the browser to render the page using modern HTML rules.

-- <html lang="en">: This is the root element that encloses the entire HTML document. The lang attribute defines the language of the page for accessibility purposes.

-- <head>: Contains meta-information about the webpage that isn't directly visible on the page, such as the document's title (<title>), meta tags (<meta>), and links to stylesheets or other resources.

-- <meta charset="UTF-8">: Ensures the document uses UTF-8 character encoding, supporting most characters from various languages.

-- <meta name="viewport" content="width=device-width, initial-scale=1.0">: Makes the webpage responsive by controlling the page's dimensions and scaling on different devices.

-- <title>: Sets the title of the page that appears on the browser tab.

-- <body>: Contains all the visible content of the web page. This is where you place text, images, links, buttons, and other elements.

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is my first paragraph of text on my website.</p>
  </body>
</html>
```

### **Breakdown of the Code:**
-- <!DOCTYPE html>: Tells the browser that this is an HTML5 document.
-- <html lang="en">: The opening tag for the entire HTML document. It specifies that the language of the content is English (lang="en").
-- <head>: This section is not visible on the web page but is essential for providing metadata.
-- <meta charset="UTF-8">: Ensures proper display of characters.
-- <meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures the page is responsive on different devices.
-- <title>: Defines the title of the webpage, shown on the browser tab.
-- <body>: The content displayed in the browser is placed inside this tag.
-- <h1>: A top-level heading.
-- <p>: A paragraph of text.

---
### **Tasks to Do:**
-- Create a New HTML Document:

Open a code editor (like Visual Studio Code, Sublime Text, or Notepad++).
Create a new file and save it as index.html.
Add the basic HTML structure outlined in the example above.
Edit the Title and Content:

-- Change the content of the <title> tag to something relevant to you (e.g., "My Portfolio" or "About Me").
Inside the <body> section, replace the heading and paragraph text with something personal, such as "Hello, I'm [Your Name]" or "This is a test webpage for my HTML learning journey."
Open the HTML File in a Browser:

-- Open the index.html file in a web browser (like Chrome, Firefox, or Edge) by double-clicking it or dragging it into the browser.
You should see your heading and paragraph displayed, along with the title on the browser tab.
Bonus Task (Optional):

--Add more headings (<h2>, <h3>) and paragraphs to see how they affect the structure and appearance of the webpage.
Experiment with different text to better understand how HTML tags affect the display.