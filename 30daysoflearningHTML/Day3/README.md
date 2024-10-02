# Day 3: Creating Links in HTML

## Concepts and Explanation
On **Day 3**, we will explore how to create and work with links in HTML using the `<a>` tag. Links (or hyperlinks) allow users to navigate between different pages, sections, or resources by clicking on the text.

### 1. The Anchor Tag (`<a>`)
The `<a>` tag is used to create hyperlinks. The `href` attribute defines the URL or path that the link points to, and the text between the opening and closing `<a>` tags is the clickable text.

---

## Key Elements

### 1. Basic Link Syntax
A basic link looks like this:

```html
<a href="URL">Link Text</a>
```

- href: This attribute contains the URL of the destination the link points to.
- Link Text: This is the clickable text visible to users.

### 2. Linking to External Websites
To link to an external website, use the full URL in the href attribute.

```html
<a href="https://www.google.com">Go to Google</a>
```

### 3. Linking to Internal Pages

To link to pages within your own website, use a relative path for the href
```html
<a href="/about.html">About Us</a>
```

### 4. Opening Links in a New Tab
You can open a link in a new tab by adding the target="_blank" attribute to the <a> tag.

```html
<a href="https://www.google.com" target="_blank">Open Google in New Tab</a>
```

### 5. Email Links
You can create links that open an email client to send an email by using the mailto: scheme.

```html
<a href="mailto:someone@example.com">Send an Email</a>
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 3 - Links in HTML</title>
</head>
<body>
    <h1>HTML Links</h1>

    <h2>External Link</h2>
    <p>Click the link below to visit an external website:</p>
    <a href="https://www.example.com">Visit Example Website</a>

    <h2>Internal Link</h2>
    <p>Click the link below to go to the About Us page:</p>
    <a href="/about.html">Go to About Us</a>

    <h2>Open Link in New Tab</h2>
    <p>Click the link below to open in a new tab:</p>
    <a href="https://www.example.com" target="_blank">Visit Example in New Tab</a>

    <h2>Email Link</h2>
    <p>Click the link below to send an email:</p>
    <a href="mailto:someone@example.com">Send an Email</a>
</body>
</html>
```
