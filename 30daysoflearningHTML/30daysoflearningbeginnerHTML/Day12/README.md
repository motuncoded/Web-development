# Day 12: Form Elements (Select, Checkbox, Radio)

We'll focus on three important form elements in HTML: **select** dropdowns, **checkboxes**, and **radio buttons**. These elements allow users to make selections from predefined options, which is essential for collecting structured data in web forms.

### 1. Select Dropdown (`<select>`)

A select dropdown allows users to choose one option from a list. It is useful when you have multiple options but want to save space.

#### Example:

```html
<label for="country">Select your country:</label>
<select id="country" name="country" required>
  <option value="">--Please select--</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="au">Australia</option>
</select>
```

- The `<option>` elements inside the `<select>` define the choices available to the user.
- The `required` attribute ensures that a selection is made before the form can be submitted.

### 2. Checkbox (`<input type="checkbox">`)

Checkboxes allow users to make multiple selections from a set of options. They are used when multiple options can be selected at once.

#### Example:

```html
<fieldset>
  <legend>Interests:</legend>
  <input type="checkbox" id="sports" name="interests" value="sports" />
  <label for="sports">Sports</label><br />
  <input type="checkbox" id="music" name="interests" value="music" />
  <label for="music">Music</label><br />
  <input type="checkbox" id="reading" name="interests" value="reading" />
  <label for="reading">Reading</label>
</fieldset>
```

- Checkboxes are grouped by giving them the same `name` attribute. This allows the server to recognize them as a list.

### 3. Radio Buttons (`<input type="radio">`)

Radio buttons allow users to select one option from a group. When multiple radio buttons share the same `name`, only one can be selected at a time.

#### Example:

```html
<fieldset>
  <legend>Preferred contact method:</legend>
  <input type="radio" id="email" name="contact" value="email" required />
  <label for="email">Email</label><br />
  <input type="radio" id="phone" name="contact" value="phone" />
  <label for="phone">Phone</label><br />
  <input type="radio" id="post" name="contact" value="post" />
  <label for="post">Post</label>
</fieldset>
```

- Similar to checkboxes, radio buttons must have the same `name` attribute to work as a group.
