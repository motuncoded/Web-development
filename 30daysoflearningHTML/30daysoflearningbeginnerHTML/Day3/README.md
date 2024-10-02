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
<a href="https://www.google.com" rel="noopener noreferrer">Go to Google</a>
```
- target="_blank" opens the link in a new tab.
- rel="noopener noreferrer" is used for security reasons when using target="_blank".

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

### 6. Anchor Links

Links that jump to a specific section on the same page using an id attribute.
```html
<!-- Link -->
<a href="#section1">Jump to Section 1</a>

<!-- Target Section -->
<h2 id="section1">Section 1</h2>
```

### 7. Telephone Links

Links that allow users to call a phone number when clicked on a mobile device.
```html
<a href="tel:+1234567890">Call Us</a>
```

## Attributes of links
1. href=URL
href: Specifies the URL or destination of the link.

2. _target
The target attribute controls how the link opens:
- _blank: Opens the link in a new tab/window.
- _self: Opens in the same frame as it was clicked (default behavior).
- _parent: Opens in the parent frame.
- _top: Opens in the full body of the window.

3. Rel Attribute
The rel attribute provides information about the relationship between the current document and the linked document. Common values include:
- noopener: Prevents the new page from being able to access the window.opener property.
- noreferrer: Prevents the browser from sending the HTTP referrer header to the new page.
- external: Indicates that the linked document is on a different domain.


