# Day 1: What is an HTML Form?
Goal: Understand the purpose and structure of HTML forms.
Activity: Create a simple HTML page with a basic form layout.
## 1. Introduction to HTML Forms
An HTML form is a section of a web page that allows users to input and submit data. Forms are a key part of user interaction on the web, used for login pages, sign-up forms, feedback, and more. The data submitted by  is sent to a server for processing, typically using HTTP methods like GET or POST.

### Key Components of an HTML Form:
- `<form>`: The container element for the form.
- `<input>`: Used for various types of user input like text, email, and passwords.
- `<label>`: Associates a label with an input field to make forms more accessible.
- `<button>`: Submits the form.
- action: Specifies where to send the form data when submitted.
- method: Determines how the data is sent (usually GET or POST).

## 2. Basic Form Structure
Here’s a simple example of a basic HTML form layout:

```html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic HTML Form</title>
</head>
<body>
  <h1>Contact Us</h1>
  <form action="/submit-form" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    
    <button type="submit">Submit</button>
  </form>
</body>
</html>
```
## 3. Explanation:
- `<form action="/submit-form" method="POST">`: This is the starting point of the form. The action attribute tells the form where to send the data (in this case, /submit-form). The method="POST" means the data will be sent securely in the body of the request.

`<label>`: The label tag is used to define labels for form controls. When users click on the label, the corresponding input field is activated.

`<input>`: There are different types of inputs such as text, email, password, etc. Each field is associated with a name attribute that will be used to reference the form data after submission.
users
`<textarea>`: Used for multi-line text input, useful for longer text submissions.

`<button>`: Submits the form data to the server. The default type is submit.

## 4. Form Submission Methods
- GET: Appends form data to the URL, generally used for data retrieval.
Example: example.com/form?name=John&email=john@example.com
POST: Sends the data as part of the request body, typically used when the data is more sensitive or involves changes (like creating or updating a record).
5. Activity: Create a Simple HTML Form
Task:
Create an HTML page that contains a form with the following fields:
Name: A text input for the user’s name.
Email: An input for the user's email address.
Message: A text area where the user can leave a message.
Submit: A button to submit the form.
By the end of the day, you'll have a working form that collects user input!