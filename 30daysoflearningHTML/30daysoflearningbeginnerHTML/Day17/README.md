# Day 17: Accessibility Basics (ARIA)

Web accessibility ensures that websites are usable by everyone, including people with disabilities. ARIA (Accessible Rich Internet Applications) is a set of attributes that improve the accessibility of dynamic web content and applications for screen readers and other assistive technologies.

Today, we'll focus on the basics of ARIA and how to make web content more accessible to users with disabilities.

## 1. What is ARIA?

ARIA provides a way to define how web content and applications should be treated by assistive technologies, such as screen readers, without changing the visual structure of the content.

### Key ARIA Roles and Attributes:

- Roles: Define what an element is or its purpose (e.g., button, navigation, dialog).
- States and Properties: Describe the behavior of an element (e.g., aria-expanded, aria-disabled, aria-checked).

## 2. Why is ARIA Important?

While HTML5 includes many native accessibility features, ARIA extends that capability for dynamic web elements and ensures assistive technologies can interpret interactive components correctly. ARIA should only be used when native HTML semantics are not enough.

## 3. ARIA Roles

ARIA roles help define the purpose of elements on the page for users relying on assistive technologies.

Common ARIA Roles:
Role: button

Used for interactive buttons.
Example:

```html
Copy code
<div role="button" tabindex="0">Click Me</div>
```

Role: navigation

Defines a block of navigation links.
Example:

```html
Copy code
<nav role="navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
```

Role: alert

Displays a message to the user that needs immediate attention.
Example:

```html
Copy code
<div role="alert">Form submission failed!</div>
```

Role: dialog

Represents a pop-up dialog box.
Example:

```html
Copy code
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirmation</h2>
  <p>Are you sure you want to proceed?</p>
</div>
```

## 4. ARIA States and Properties

ARIA states and properties allow you to define dynamic behavior for interactive elements that might not otherwise be clear to assistive technologies.

Common ARIA States and Properties:
aria-label

Provides an accessible name for an element.
Example:

```html
Copy code <button aria-label="Close menu">X</button>
```

aria-expanded

Indicates whether a collapsible element is expanded or collapsed.
Example:

```html
Copy code
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
</ul>
```

aria-hidden

Hides elements from screen readers, though the content is still visible visually.
Example:

```html
Copy code
<div aria-hidden="true">This text is hidden from assistive technologies</div>
```

aria-disabled

Indicates that an element is disabled and cannot be interacted with.
Example:

```html
Copy code <button aria-disabled="true">Submit</button>
```

aria-live

Specifies the priority of updates for dynamic content.
Example:

```html
Copy code
<div aria-live="polite">New message received.</div>
```

## 5. Practical Examples of ARIA for Accessibility

- (a) Accessible Dropdown Menu
  Here's how you can make a dropdown menu accessible using ARIA attributes like aria-haspopup, aria-expanded, and aria-controls.

```html
Copy code
<button
  aria-haspopup="true"
  aria-expanded="false"
  aria-controls="dropdown-menu"
>
  Options
</button>
<ul id="dropdown-menu" role="menu" hidden>
  <li role="menuitem"><a href="#">Item 1</a></li>
  <li role="menuitem"><a href="#">Item 2</a></li>
</ul>
```

Explanation:

- aria-haspopup="true": Indicates that the button controls a dropdown menu.
- aria-expanded="false": When set to true, it indicates the dropdown is open.
- role="menu": Defines the list as a menu.
- role="menuitem": Defines the list items as menu items.
- aria-controls="dropdown-menu": Specifies the ID of the dropdown menu controlled by the button.
- hidden: Hides the dropdown menu by default.

-(b) Accessible Modal Dialog
Here's an example of an accessible modal dialog box using role="dialog" and aria-labelledby.

```html
Copy code
<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <h2 id="modal-title">Modal Title</h2>
  <p>Content of the modal goes here.</p>
  <button aria-label="Close" onclick="closeModal()">Close</button>
</div>
```

Explanation:

- role="dialog": Marks the element as a dialog.
- aria-labelledby: Links the dialog title to the modal for screen readers.
- aria-modal="true": Informs assistive technologies that this dialog requires user interaction and all other elements are backgrounded.

## 6. Best Practices for Using ARIA

- Use ARIA only when necessary:

- Rely on native HTML elements when possible (e.g., `<button>`, `<nav>`, `<header>`).
  Ensure ARIA is used correctly:

- Misusing ARIA attributes can make content less accessible. Always follow ARIA documentation to ensure you’re applying the correct roles, states, and properties.
- Don’t hide focusable elements:

- Avoid using aria-hidden on elements that users can interact with, such as form fields or links.
  Test your ARIA implementation:

- Use screen readers (such as NVDA or VoiceOver) to test how your ARIA roles and attributes affect the user experience.

## 7. ARIA Landmarks

ARIA landmarks help define different sections of a web page, which assistive technologies can use to navigate more efficiently. Instead of scrolling through the entire page, users can jump directly to key landmarks.

Common ARIA Landmarks:

- role="banner": Identifies the main header or logo section.
- role="navigation": Identifies the main navigation section.
- role="main": Marks the primary content area.
- role="contentinfo": Identifies the footer or information about the page.
- role="search": Identifies the search form.

## 8. Tools for Testing Accessibility

- (a) Lighthouse (Google Chrome DevTools):
  You can use the Lighthouse tool in Chrome DevTools to audit your website for accessibility, SEO, performance, and more.
- (b) WAVE (Web Accessibility Evaluation Tool):
  An online tool that provides visual feedback about the accessibility of your web content.
- (c) Screen Readers:
  NVDA (Windows) or VoiceOver (macOS/iOS) are commonly used screen readers that allow you to test how assistive technologies interact with your website.
