### Day 6: Radio Buttons

Welcome to Day 6! Today, you'll focus on **Radio Buttons**, which are a common way for users to select one option from a set of predefined choices. They are particularly useful when the user must make a single choice among multiple options, such as selecting a payment method or choosing a preference.

---

#### Goals for Day 6:
- Understand the basic structure of radio buttons.
- Learn how to group radio buttons using the same name attribute.
- Explore accessibility considerations for radio buttons.
- Implement styling for radio buttons.

---

#### 1. Basic Structure of Radio Buttons

A radio button is created using the `<input>` element with the `type` attribute set to `radio`. Each radio button in a group should share the same `name` attribute, which ensures that only one option can be selected at a time. Here’s a simple example:

```html
<form>
    <fieldset>
        <legend>Choose a payment method:</legend>
        <label>
            <input type="radio" name="payment" value="credit" required>
            Credit Card
        </label>
        <label>
            <input type="radio" name="payment" value="paypal">
            PayPal
        </label>
        <label>
            <input type="radio" name="payment" value="bank-transfer">
            Bank Transfer
        </label>
    </fieldset>
</form>
```

In this example:
- Each radio button is associated with a label for better usability.
- The `required` attribute ensures that the user must select one of the options before submitting the form.

---

#### 2. Grouping Radio Buttons

To allow only one radio button to be selected at a time, ensure that all radio buttons in the group share the same `name` attribute. This example illustrates grouping:

```html
<form>
    <fieldset>
        <legend>Choose your favorite fruit:</legend>
        <label>
            <input type="radio" name="fruit" value="apple" required>
            Apple
        </label>
        <label>
            <input type="radio" name="fruit" value="banana">
            Banana
        </label>
        <label>
            <input type="radio" name="fruit" value="orange">
            Orange
        </label>
    </fieldset>
</form>
```

---

#### 3. Accessibility Considerations

To ensure accessibility for all users, follow these best practices:

- **Use Labels**: Always provide `<label>` elements associated with radio buttons. Clicking on the label should select the corresponding radio button.
  
- **Fieldset and Legend**: Group related radio buttons using the `<fieldset>` and `<legend>` elements to provide context.

- **Keyboard Accessibility**: Ensure users can navigate and select radio buttons using the keyboard (Tab to navigate and Space or Enter to select).

Example of accessible radio buttons:

```html
<form>
    <fieldset>
        <legend>Choose your favorite animal:</legend>
        <label>
            <input type="radio" name="animal" value="dog" required>
            Dog
        </label>
        <label>
            <input type="radio" name="animal" value="cat">
            Cat
        </label>
        <label>
            <input type="radio" name="animal" value="bird">
            Bird
        </label>
    </fieldset>
</form>
```

---

#### 4. Styling Radio Buttons

You can style radio buttons to enhance their appearance. Here’s a basic CSS example to customize radio buttons:

```css
input[type="radio"] {
    display: none; /* Hide the default radio button */
}

label {
    position: relative;
    padding-left: 30px; /* Space for custom radio button */
    cursor: pointer; /* Change cursor to pointer */
}

label::before {
    content: '';
    position: absolute;
    left: 0; /* Align with label */
    top: 50%;
    transform: translateY(-50%); /* Center vertically */
    width: 20px; /* Custom radio button size */
    height: 20px; /* Custom radio button size */
    border: 2px solid #005fcc; /* Border color */
    border-radius: 50%; /* Round shape */
    background: white; /* Background color */
}

input[type="radio"]:checked + label::before {
    background: #005fcc; /* Change background on checked */
}

input[type="radio"]:checked + label::after {
    content: '';
    position: absolute;
    left: 6px; /* Adjust position for inner circle */
    top: 50%;
    transform: translateY(-50%); /* Center vertically */
    width: 8px; /* Inner circle size */
    height: 8px; /* Inner circle size */
    border-radius: 50%; /* Round shape */
    background: white; /* Inner circle color */
}
```

This CSS hides the default radio buttons and replaces them with custom-styled radio buttons that provide a more visually appealing look.

---

#### Task for Today

1. Create a simple HTML form with a group of radio buttons for selecting a favorite color or preference.
2. Implement appropriate attributes (e.g., `name`, `value`, and `required`).
3. Use `<fieldset>` and `<legend>` to group related radio buttons.
4. Style the radio buttons using CSS to enhance their appearance.
5. Ensure that your form is accessible by using proper labels and handling keyboard navigation.

---

By the end of Day 6, you will have a solid understanding of how to create and manage radio buttons in forms, enhancing both functionality and user experience. Keep up the great work!

