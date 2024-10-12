# Day 8: Radio Buttons

Today, you will focus on radio buttons, which allow users to select one option from a predefined set. Radio buttons are essential when only a single choice is allowed, such as in multiple-choice questions. As always, we will ensure accessibility by using ARIA attributes.

---

#### Goals for Day 8:

- Learn the HTML structure for radio buttons.
- Understand how to group radio buttons.
- Implement ARIA attributes for better accessibility.
- Customize radio buttons with CSS.

---

## 1. Radio Button Basics

Radio buttons are similar to checkboxes, but they are used when only one option can be selected from a group. Here's the basic HTML structure:

```html
<form>
  <label for="male">Male</label>
  <input type="radio" id="male" name="gender" value="male" />

  <label for="female">Female</label>
  <input type="radio" id="female" name="gender" value="female" />
</form>
```

#### 2. Grouping Radio Buttons

To ensure only one radio button can be selected at a time, use the same `name` attribute for each button in the group. The value associated with the `name` will represent the selected option.

Example:

```html
<form>
  <fieldset>
    <legend>Choose your age group:</legend>
    <label for="age1">18-25</label>
    <input type="radio" id="age1" name="age" value="18-25" />

    <label for="age2">26-35</label>
    <input type="radio" id="age2" name="age" value="26-35" />

    <label for="age3">36-45</label>
    <input type="radio" id="age3" name="age" value="36-45" />
  </fieldset>
</form>
```

#### 3. Accessibility with ARIA

To make radio buttons more accessible, ARIA attributes such as `aria-checked` and `aria-labelledby` can be used.

- **`aria-checked`**: Indicates whether a radio button is selected.
- **`aria-labelledby`**: Links the radio button to a label for accessibility.

Example:

```html
<form>
  <fieldset>
    <legend>Choose your preferred contact method:</legend>
    <div role="radiogroup" aria-labelledby="contact-method-label">
      <label id="contact-method-label">Preferred Contact Method:</label>
      <label for="email">Email</label>
      <input
        type="radio"
        id="email"
        name="contact"
        value="email"
        aria-checked="false"
      />

      <label for="phone">Phone</label>
      <input
        type="radio"
        id="phone"
        name="contact"
        value="phone"
        aria-checked="false"
      />
    </div>
  </fieldset>
</form>
```

#### 4. Customizing Radio Buttons with CSS

You can style radio buttons for a more custom appearance using CSS:

```css
input[type="radio"] {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #ccc;
}

input[type="radio"]:checked {
  background-color: #4caf50; /* Primary color */
}
```

---

#### Task for Today:

1. Create a form with radio buttons allowing users to choose one option from a set (e.g., favorite color, preferred mode of transport).
2. Use ARIA attributes to improve accessibility.
3. Style the radio buttons to align with your design system.

---

That’s all for Day 8! By the end of today, you’ll have a solid understanding of how to implement radio buttons, customize them, and make them accessible.
