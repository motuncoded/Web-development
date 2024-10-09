# Day 24: Accessibility (Advanced ARIA)

## Accessibility is crucial in web development to ensure that all users, including those with disabilities, can navigate, understand, and interact with web content. Today, we will delve into Advanced Accessible Rich Internet Applications (ARIA) techniques, focusing on how to enhance accessibility in complex web applications. ARIA provides a way to enhance HTML's semantic capabilities, making it easier for assistive technologies to interpret and interact with your web content.

## 1. What is ARIA?

ARIA (Accessible Rich Internet Applications) is a set of attributes that you can add to HTML elements to improve accessibility, particularly in dynamic web applications where the standard HTML semantics might not provide sufficient information to assistive technologies like screen readers.

Key Concepts:

- Roles: Define what an element is or does.
- Properties: Provide additional information about the state of an element.
- States: Indicate the current condition of an element.

---

## 2. ARIA Roles

Roles define the purpose of an element. Here are some commonly used ARIA roles:

### a. Landmark Roles

Landmark roles help users with screen readers navigate quickly to different sections of a webpage.

banner: Represents introductory content, typically a site header.
navigation: Defines navigation links.
main: Indicates the primary content of the document.
contentinfo: Represents footer content.
Example:

```html
Copy code
<header role="banner">
  <h1>My Website</h1>
</header>
<nav role="navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
<main role="main">
  <h2>Welcome to My Website</h2>
</main>
<footer role="contentinfo">
  <p>© 2024 My Website</p>
</footer>
```

### b. Widget Roles

Widget roles help define interactive components on a web page.

button: Represents a clickable button.
checkbox: Represents a checkbox input.
dialog: Represents a dialog box or modal window.
slider: Represents a control for selecting a value from a range.
Example:

```html
Copy code <button role="button" aria-pressed="false">Toggle</button>
```

---

## 3. ARIA Properties

ARIA properties provide additional information about elements, enhancing their functionality for assistive technologies.

### a. aria-label

Provides a string that labels an interactive element. It’s especially useful when there’s no visible label.

Example:

```html
Copy code <button aria-label="Close" onclick="closeModal()">×</button>
```

### b. aria-labelledby

References another element that serves as a label for the current element.

Example:

```html
Copy code
<h2 id="dialogTitle">Dialog Title</h2>
<div role="dialog" aria-labelledby="dialogTitle">
  <!-- Dialog content -->
</div>
```

### c. aria-describedby

References another element that provides a description for the current element.

Example:

```html
Copy code
<input type="text" aria-describedby="usernameHelp" />
<span id="usernameHelp">Your username must be 8-20 characters long.</span>
```

## 4. ARIA States

ARIA states are dynamic properties that indicate the current state of an element.

### a. aria-checked

Indicates the current "checked" state of checkboxes or radio buttons.

Example:

```html
Copy code
<input type="checkbox" aria-checked="false" onclick="toggleCheckbox(this)" />
```

### b. aria-expanded

Indicates whether an element that can be expanded or collapsed is currently expanded.

Example:

```html
Copy code <button aria-expanded="false" onclick="toggleMenu()">Menu</button>
```

### c. aria-hidden

Indicates whether an element is visible or hidden to assistive technologies.

Example:

```html
Copy code
<div aria-hidden="true">This content is hidden from screen readers.</div>
```

---

## 5. Managing Focus and Keyboard Navigation

For dynamic applications, managing focus is crucial. Use ARIA properties along with proper HTML structure to ensure users can navigate your application effectively using a keyboard.

a. Managing Focus with JavaScript
When showing or hiding elements, ensure that focus moves to appropriate elements.

Example:

```javascript
Copy code
function toggleDialog() {
  const dialog = document.getElementById('dialog');
  dialog.style.display = dialog.style.display === 'none' ? 'block' : 'none';

  if (dialog.style.display === 'block') {
    dialog.setAttribute('aria-hidden', 'false');
    dialog.focus(); // Move focus to the dialog
  } else {
    dialog.setAttribute('aria-hidden', 'true');
  }
}
```

### b. Keyboard Navigation

Ensure that all interactive elements are reachable and operable using the keyboard (Tab, Enter, Escape keys).

Example:

```html
Copy code
<button
  onclick="openDialog()"
  onkeydown="if(event.key === 'Enter') openDialog()"
>
  Open Dialog
</button>
```

---

## 6. Tools for Testing Accessibility

Several tools can help you test and validate the accessibility of your web applications:

- WAVE: A web accessibility evaluation tool that helps identify accessibility issues on web pages.
- axe: An accessibility testing tool integrated into developer tools and CI/CD pipelines.
- Lighthouse: An open-source automated tool for improving the quality of web pages, which includes accessibility audits.

---

## 7. Best Practices for Using ARIA

- Use ARIA as a last resort: Prefer native HTML elements and attributes for accessibility before resorting to ARIA.
- Keep it simple: Avoid overusing ARIA roles and attributes, as they can lead to confusion.
  \_ Test with assistive technologies: Always test your application using screen readers and other assistive tools to ensure it meets accessibility standards.
