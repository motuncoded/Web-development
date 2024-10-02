# Day 8: Semantic HTML Introduction

## What is Semantic HTML?
Semantic HTML refers to HTML that introduces meaning to the web page structure beyond just presentation. Semantic tags describe the content they enclose in a way that both the browser and developers can understand. These tags help to clarify the role of different parts of a webpage and improve accessibility for assistive technologies (like screen readers) and search engines.

Example:
Instead of using a generic <div> tag to mark up different sections of a webpage, semantic HTML introduces elements like <header>, <footer>, <main>, and <article> that convey the purpose of the content.

## Why is Semantic HTML Important?
- Improves Accessibility:
Semantic tags help screen readers and other assistive technologies interpret content more easily, providing a better experience for users with disabilities.

- Boosts SEO (Search Engine Optimization):
Search engines use semantic HTML to better understand the structure and importance of content on a page. This can improve your site’s ranking and discoverability.

- Enhances Code Readability:
Using descriptive tags makes your HTML more readable and maintainable for developers, reducing confusion and enhancing collaboration.

- Better Browser Compatibility:
Semantic HTML helps modern browsers to properly interpret the structure of a webpage, ensuring consistent rendering across different platforms.

### Basic Semantic HTML Tags
- 1. `<header>`: Defines the Header Section
The `<header>` tag is used to represent the introductory content or navigational links at the top of a section or a webpage. A header typically contains elements like logos, headings, and a navigation menu.

Example:

```html
<header>
    <h1>My Blog</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
```
- 2. `<footer>`: Defines the Footer Section
The `<footer>` element defines the footer of a webpage or a section. It typically contains information like copyright notices, contact information, and external links.

Example:

```html
<footer>
    <p>&copy; 2024 My Blog. All rights reserved.</p>
    <p><a href="mailto:info@myblog.com">Contact Us</a></p>
</footer>
```

- 3. `<main>`: Specifies the Main Content
The `<main>` tag is used to encapsulate the main content of a document. It contains the central content that is unique to the page, excluding headers, footers, navigation menus, or sidebars.

Example:

```html
<main>
    <h2>Welcome to My Blog</h2>
    <p>This blog shares articles on web development and technology trends.</p>
</main>
```
- 4. `<section>`: Defines Thematic Grouping of Content
The `<section>` tag is used to group related content into a distinct section with a thematic relationship. Sections can be used to break down the content logically into different parts.

Example:

```html
<main>
    <section>
        <h2>Recent Articles</h2>
        <p>Check out the latest posts on my blog!</p>
    </section>
    
    <section>
        <h2>About Me</h2>
        <p>I am a web developer with a passion for learning new technologies.</p>
    </section>
</main>
```

- 5. `<article>: Represents Self-Contained Content
The <article> tag defines independent, self-contained content that could stand alone. It is commonly used for blog posts, news articles, or comments.

Example:

```html
Copy code
<article>
    <h2>Understanding Semantic HTML</h2>
    <p>Semantic HTML improves the structure of your web pages and helps search engines better understand your content.</p>
</article>
```
Combining Semantic Tags for a Structured Webpage
Below is a simple example that combines the semantic tags discussed above into a coherent structure for a basic webpage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
</head>
<body>

    <header>
        <h1>My Blog</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <article>
                <h2>Understanding Semantic HTML</h2>
                <p>Semantic HTML improves the structure of your web pages and helps search engines better understand your content.</p>
            </article>
        </section>

        <section>
            <h2>Latest Posts</h2>
            <article>
                <h3>Post Title</h3>
                <p>Summary of the blog post.</p>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>

</body>
</html>
```