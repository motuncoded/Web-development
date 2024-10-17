### Day 7: Checkboxes

Welcome to Day 7! Today, you'll focus on **Checkboxes**, which allow users to select one or more options from a set of choices. Checkboxes are useful for situations where multiple selections are allowed, such as selecting interests, preferences, or terms of service.

---

#### Goals for Day 7:

- Understand the basic structure of checkboxes.
- Learn how to group checkboxes using the same name attribute.
- Explore accessibility considerations for checkboxes.
- Implement styling for checkboxes.

---

#### 1. Basic Structure of Checkboxes

A checkbox is created using the `<input>` element with the `type` attribute set to `checkbox`. Unlike radio buttons, checkboxes allow users to select multiple options. Here’s a simple example:

```html
<form>
  <fieldset>
    <legend>Select your hobbies:</legend>
    <label>
      <input type="checkbox" name="hobbies" value="reading" />
      Reading
    </label>
    <label>
      <input type="checkbox" name="hobbies" value="traveling" />
      Traveling
    </label>
    <label>
      <input type="checkbox" name="hobbies" value="cooking" />
      Cooking
    </label>
  </fieldset>
</form>
```

In this example:

- Each checkbox is associated with a label for better usability.
- Users can select any combination of the provided options.

---

#### 2. Grouping Checkboxes

While checkboxes can share the same `name` attribute to group them logically, each checkbox should have a unique `value` to identify what was selected. For example, if the user selects multiple hobbies, the form will submit the selected values under the same name:

```html
<form>
  <fieldset>
    <legend>Select your favorite programming languages:</legend>
    <label>
      <input type="checkbox" name="languages" value="javascript" />
      JavaScript
    </label>
    <label>
      <input type="checkbox" name="languages" value="python" />
      Python
    </label>
    <label>
      <input type="checkbox" name="languages" value="java" />
      Java
    </label>
  </fieldset>
</form>
```

---

#### 3. Accessibility Considerations

To ensure accessibility for all users, follow these best practices:

- **Use Labels**: Always provide `<label>` elements associated with checkboxes. Clicking on the label should select or deselect the corresponding checkbox.
- **Fieldset and Legend**: Group related checkboxes using the `<fieldset>` and `<legend>` elements to provide context.

- **Keyboard Accessibility**: Ensure users can navigate and select checkboxes using the keyboard (Tab to navigate and Space to toggle).

Example of accessible checkboxes:

```html
<form>
  <fieldset>
    <legend>Select your favorite desserts:</legend>
    <label>
      <input type="checkbox" name="desserts" value="cake" />
      Cake
    </label>
    <label>
      <input type="checkbox" name="desserts" value="ice-cream" />
      Ice Cream
    </label>
    <label>
      <input type="checkbox" name="desserts" value="cookies" />
      Cookies
    </label>
  </fieldset>
</form>
```

---

#### 4. Styling Checkboxes

You can style checkboxes to enhance their appearance. Below is a basic CSS example to customize checkboxes:

```css
input[type="checkbox"] {
  display: none; /* Hide the default checkbox */
}

label {
  position: relative;
  padding-left: 30px; /* Space for custom checkbox */
  cursor: pointer; /* Change cursor to pointer */
}

label::before {
  content: "";
  position: absolute;
  left: 0; /* Align with label */
  top: 50%;
  transform: translateY(-50%); /* Center vertically */
  width: 20px; /* Custom checkbox size */
  height: 20px; /* Custom checkbox size */
  border: 2px solid #005fcc; /* Border color */
  border-radius: 4px; /* Square corners */
  background: white; /* Background color */
}

input[type="checkbox"]:checked + label::before {
  background: #005fcc; /* Change background on checked */
}

input[type="checkbox"]:checked + label::after {
  content: "✔"; /* Checkmark symbol */
  position: absolute;
  left: 5px; /* Adjust position for checkmark */
  top: 50%;
  transform: translateY(-50%); /* Center vertically */
  color: white; /* Checkmark color */
}
```

This CSS hides the default checkboxes and replaces them with custom-styled checkboxes that provide a more visually appealing look.

---

#### Task for Today

1. Create a simple HTML form with a group of checkboxes for selecting favorite fruits or activities.
2. Implement appropriate attributes (e.g., `name`, `value`).
3. Use `<fieldset>` and `<legend>` to group related checkboxes.
4. Style the checkboxes using CSS to enhance their appearance.
5. Ensure that your form is accessible by using proper labels and handling keyboard navigation.

---

By the end of Day 7, you will have a solid understanding of how to create and manage checkboxes in forms, enhancing both functionality and user experience. Keep up the great work!
