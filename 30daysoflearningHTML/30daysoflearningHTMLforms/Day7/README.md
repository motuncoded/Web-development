# Day 7: Checkbox Inputs

Today, you will focus on understanding and implementing checkbox inputs, a crucial part of interactive forms. As with other form elements, ensuring accessibility is important, so you’ll learn how to integrate ARIA attributes effectively.

## Goals for Day 7:

Learn the HTML structure for checkboxes.
Understand how to group checkboxes.
Implement ARIA attributes for better accessibility.
Customize checkboxes with CSS.

### 1. Checkbox Basics

Checkboxes allow users to select one or more options from a set. Here's the basic HTML structure:

```html
Copy code
<form>
  <label for="subscribe">Subscribe to newsletter</label>
  <input type="checkbox" id="subscribe" name="newsletter" />
</form>
```

### 2. Grouping Checkboxes

To allow users to select multiple options, you can group checkboxes with the same name attribute:

```html
Copy code
<form>
  <fieldset>
    <legend>Select your interests:</legend>
    <label for="sports">Sports</label>
    <input type="checkbox" id="sports" name="interests" value="sports" />

    <label for="music">Music</label>
    <input type="checkbox" id="music" name="interests" value="music" />

    <label for="travel">Travel</label>
    <input type="checkbox" id="travel" name="interests" value="travel" />
  </fieldset>
</form>
```

### 3. Accessibility with ARIA

For better accessibility, add ARIA attributes to help screen readers understand the checkboxes:

- aria-checked: Indicates whether the checkbox is checked (true, false, or mixed).
- aria-labelledby: Associates the checkbox with a descriptive label, especially useful when labels are complex or dynamically generated.
  Example:

```html
Copy code
<form>
  <fieldset>
    <legend>Select your interests:</legend>
    <div role="group" aria-labelledby="interests-label">
      <label id="interests-label">Interests:</label>
      <label for="sports">Sports</label>
      <input
        type="checkbox"
        id="sports"
        name="interests"
        aria-checked="false"
      />
      <label for="music">Music</label>
      <input type="checkbox" id="music" name="interests" aria-checked="false" />
      <label for="travel">Travel</label>
      <input
        type="checkbox"
        id="travel"
        name="interests"
        aria-checked="false"
      />
    </div>
  </fieldset>
</form>
```

### 4. Customizing Checkboxes with CSS

To create a more visually appealing form, you can style checkboxes with custom designs:

```css
Copy code input[type="checkbox"] {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #ccc;
}

input[type="checkbox"]:checked {
  background-color: #4caf50; /* Primary color */
}
```

### Task for Today:

- Create a form with multiple checkboxes for a survey.
- Use ARIA attributes to improve accessibility.
- Style the checkboxes to match your design preferences.
