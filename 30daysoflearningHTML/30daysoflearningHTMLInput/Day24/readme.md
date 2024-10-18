### Day 24: Custom Checkbox and Radio Styles

#### **Objective:**
Learn how to create custom-styled checkboxes and radio buttons using CSS. Standard form elements are often difficult to style, but with the use of pseudo-elements and custom techniques, you can create visually appealing checkboxes and radio buttons that match the overall design of your website.

---

### **Tasks:**
1. Customize the appearance of checkboxes and radio buttons using CSS.
2. Use pseudo-elements (`::before` and `::after`) to create custom styles.
3. Ensure the custom checkboxes and radio buttons remain accessible.

---

### **Example 1: Custom Checkbox Styles**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Checkbox</title>
  <style>
    /* Hide the default checkbox */
    input[type="checkbox"] {
      display: none;
    }

    /* Create a custom checkbox */
    label {
      position: relative;
      padding-left: 30px;
      cursor: pointer;
      font-size: 1.2em;
    }

    /* Checkbox square */
    label::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid #007BFF;
      border-radius: 4px;
      background-color: white;
    }

    /* Checkmark when checked */
    input[type="checkbox"]:checked + label::after {
      content: "✓";
      position: absolute;
      left: 5px;
      top: 0;
      font-size: 1.5em;
      color: #007BFF;
    }
  </style>
</head>
<body>

  <form>
    <input type="checkbox" id="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>
  </form>

</body>
</html>
```

---

### **Example 2: Custom Radio Button Styles**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Radio Button</title>
  <style>
    /* Hide the default radio button */
    input[type="radio"] {
      display: none;
    }

    /* Create a custom radio button */
    label {
      position: relative;
      padding-left: 30px;
      cursor: pointer;
      font-size: 1.2em;
    }

    /* Radio button circle */
    label::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid #007BFF;
      border-radius: 50%;
      background-color: white;
    }

    /* Fill circle when selected */
    input[type="radio"]:checked + label::after {
      content: "";
      position: absolute;
      left: 5px;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: #007BFF;
      border-radius: 50%;
    }
  </style>
</head>
<body>

  <form>
    <input type="radio" id="option1" name="options">
    <label for="option1">Option 1</label><br>

    <input type="radio" id="option2" name="options">
    <label for="option2">Option 2</label>
  </form>

</body>
</html>
```

---

### **Key Techniques for Custom Styling:**

#### 1. **Hiding the Default Input**:
You can hide the default checkbox or radio button with `display: none;` or `opacity: 0;`. This allows you to replace it with a custom design.

```css
input[type="checkbox"], input[type="radio"] {
  display: none; /* or opacity: 0; */
}
```

#### 2. **Creating the Custom Design**:
Use the `::before` and `::after` pseudo-elements to design the custom checkbox or radio button.

```css
label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 2px solid #007BFF;
}
```

#### 3. **Adding the Checked State**:
When the checkbox or radio button is checked, use the `:checked` selector to style the selected state.

```css
input[type="checkbox"]:checked + label::after {
  content: "✓";
  position: absolute;
  color: #007BFF;
}
```

#### 4. **Ensuring Accessibility**:
Even when customizing the design, always keep the HTML structure accessible. Ensure that the input is still labeled correctly, and the functionality remains intact for keyboard and screen reader users.

---

### **Best Practices for Custom Checkbox and Radio Styles**:

- **Maintain Accessibility**: Always use a `<label>` for the checkbox or radio button to keep it accessible.
- **Test Across Browsers**: Custom styles may behave differently across browsers. Ensure consistent functionality.
- **Responsive Design**: Ensure your custom inputs resize or adapt well to smaller screens.

---

### **Resource Links**:
- [Styling Checkboxes and Radio Buttons](https://css-tricks.com/the-checkbox-hack/)
- [Advanced Custom Form Inputs](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)

By mastering these techniques, you'll be able to fully customize the appearance of checkboxes and radio buttons while maintaining accessibility and functionality.