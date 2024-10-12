# Day 3: Form Input Types Overview

Goal: Explore different types of input fields in HTML forms and understand their use cases.
Activity: Build a form that includes a variety of input types.

## 1. Introduction to HTML Input Types

HTML provides a variety of input types that allow users to enter different kinds of data. By specifying the type attribute in the `<input>` element, you can define the kind of input that is accepted (e.g., text, email, password, date, number).

Here’s a breakdown of common input types and their uses:

## 2. Common Input Types

### a. Text Input (type="text")

Used for short single-line text inputs, such as names or usernames.

```html
Copy code
<label for="name">Name:</label>
<input type="text" id="name" name="name" />
```

### b. Email Input (type="email")

Used for email addresses. The browser provides validation to ensure the input follows a valid email format (e.g., user@example.com).

```html
Copy code
<label for="email">Email:</label>
<input type="email" id="email" name="email" />
```

### c. Password Input (type="password")

Used to mask input characters, typically for password fields.

```html
Copy code
<label for="password">Password:</label>
<input type="password" id="password" name="password" />
```

## d. Number Input (type="number")

Allows users to enter numeric values. You can also set min and max values, as well as step increments.

```html
Copy code
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="1" max="100" step="1" />
```

### e. Date Input (type="date")

Allows users to input a date, and most browsers will show a date picker UI.

```html
Copy code
<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday" />
```

### f. Radio Button (type="radio")

Allows users to select one option from a predefined group of choices.

```html
Copy code
<p>Gender:</p>
<label for="male">Male</label>
<input type="radio" id="male" name="gender" value="male" />

<label for="female">Female</label>
<input type="radio" id="female" name="gender" value="female" />
```

### g. Checkbox (type="checkbox")

Allows users to select one or more options from a set of choices.

```html
Copy code
<p>Hobbies:</p>
<label for="reading">Reading</label>
<input type="checkbox" id="reading" name="hobby" value="reading" />

<label for="traveling">Traveling</label>
<input type="checkbox" id="traveling" name="hobby" value="traveling" />
```

### h. File Input (type="file")

Allows users to upload files.

```html
Copy code
<label for="resume">Upload your resume:</label>
<input type="file" id="resume" name="resume" />
```

### i. Range Input (type="range")

Allows users to select a value from a specified range using a slider.

```html
Copy code
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100" step="10" />
```

### j. Submit Button (type="submit")

Triggers form submission.

```html
Copy code <button type="submit">Submit</button>
```

k. Color Input (type="color")
Allows users to select a color, usually through a color picker UI.

```html
Copy code
<label for="favcolor">Favorite Color:</label>
<input type="color" id="favcolor" name="favcolor" />
```

## 3. Example Form with Multiple Input Types

Here’s an example of a form that includes a variety of input types:

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Input Types Example</title>
  </head>
  <body>
    <h1>User Information Form</h1>

    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required /><br />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required /><br />

      <label for="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        min="1"
        max="120"
        required
      /><br />

      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday" required /><br />

      <p>Gender:</p>
      <label for="male">Male</label>
      <input type="radio" id="male" name="gender" value="male" />

      <label for="female">Female</label>
      <input type="radio" id="female" name="gender" value="female" /><br />

      <p>Hobbies:</p>
      <label for="reading">Reading</label>
      <input type="checkbox" id="reading" name="hobby" value="reading" />

      <label for="traveling">Traveling</label>
      <input
        type="checkbox"
        id="traveling"
        name="hobby"
        value="traveling"
      /><br />

      <label for="resume">Upload Resume:</label>
      <input type="file" id="resume" name="resume" /><br />

      <label for="volume">Volume:</label>
      <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        step="10"
      /><br />

      <label for="favcolor">Favorite Color:</label>
      <input type="color" id="favcolor" name="favcolor" /><br />

      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

## 4. Activity: Build a Multi-Input Form

Task:
Create a form that uses at least 5 different input types.
The form should include fields for a name, email, password, age, and favorite color.
Experiment with radio buttons and checkboxes to allow multiple choice selection.

Next Steps:
Add validation attributes (e.g., required, min, max) to make your form more user-friendly.
Style your form using CSS to make it more visually appealing.
Learn about advanced input types like tel, url, and datetime-local.
