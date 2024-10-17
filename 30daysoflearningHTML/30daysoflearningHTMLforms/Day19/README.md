### Day 19: Form Actions and Methods

Today, you'll focus on form actions and methods in HTML. These attributes define what happens when a user submits a form, including where the form data is sent and how it is sent. Understanding form actions and methods is crucial for building interactive web applications that can process user input.

---

#### Goals for Day 19:

- Learn about the `action` attribute in forms.
- Understand the `method` attribute and its two main types: `GET` and `POST`.
- Learn how to choose between `GET` and `POST` depending on the use case.
- Understand other related form submission attributes like `enctype`.

---

#### 1. The `action` Attribute

The `action` attribute in a form specifies the URL where the form data will be sent once the user submits it. If the `action` attribute is not specified, the form data is sent to the same page where the form resides.

Here’s a simple example:

```html
<form action="/submit-form" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" />

  <input type="submit" value="Submit" />
</form>
```

In this example, the form data will be sent to `/submit-form` when the user clicks the submit button.

#### 2. The `method` Attribute: `GET` vs `POST`

The `method` attribute specifies how the form data is sent to the server. It can take one of two main values:

- **`GET`**: Appends the form data to the URL in the form of query parameters. It’s suitable for non-sensitive data and when bookmarking or sharing the URL is beneficial (e.g., search forms).

  Example of a form using `GET`:

  ```html
  <form action="/search" method="GET">
    <label for="query">Search:</label>
    <input type="text" id="query" name="query" />
    <input type="submit" value="Search" />
  </form>
  ```

  When submitted, this form will send the search query as part of the URL, like this: `/search?query=example`.

- **`POST`**: Sends the form data in the body of the HTTP request, not appended to the URL. This is the preferred method for sending sensitive data (e.g., passwords) or large amounts of data, as it does not expose the data in the URL.

  Example of a form using `POST`:

  ```html
  <form action="/submit-login" method="POST">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" />
    <input type="submit" value="Login" />
  </form>
  ```

When submitted, the form data is sent securely in the request body, without being visible in the URL.

---

#### 3. When to Use `GET` vs `POST`

- **Use `GET`** when:

  - The form is retrieving data (e.g., search queries, filtering).
  - The data is not sensitive (e.g., selecting a category or sorting order).
  - You want users to be able to bookmark or share the resulting URL.

- **Use `POST`** when:
  - The form is sending sensitive data (e.g., passwords, personal information).
  - The form contains a lot of data (as `GET` has URL length limitations).
  - The action modifies server-side resources (e.g., creating, updating, or deleting data).

---

#### 4. Other Form Submission Attributes

- **`enctype`**: The `enctype` attribute specifies how the form data should be encoded when submitted to the server. This is especially important for file uploads. By default, forms use `application/x-www-form-urlencoded`, but if you’re uploading files, you must use `multipart/form-data`.

  Example:

  ```html
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <label for="file">Upload File:</label>
    <input type="file" id="file" name="file" />
    <input type="submit" value="Upload" />
  </form>
  ```

  In this case, the form is capable of handling file uploads, which requires the `multipart/form-data` encoding.

- **`target`**: This attribute specifies where the response from the form submission will be displayed. Common values include:

  - `_self`: The default value, which displays the response in the same window.
  - `_blank`: Opens the response in a new tab or window.
  - `_parent`: Displays the response in the parent frame (if using frames).
  - `_top`: Displays the response in the full window, overriding frames.

  Example:

  ```html
  <form action="/submit" method="POST" target="_blank">
    <label for="feedback">Feedback:</label>
    <textarea id="feedback" name="feedback"></textarea>
    <input type="submit" value="Submit" />
  </form>
  ```

  This form opens the submission result in a new tab.

- **`autocomplete`**: When set to `"on"` (default) or `"off"`, this attribute controls whether the browser should attempt to autocomplete input fields based on previously entered values.

  Example:

  ```html
  <form action="/save-profile" method="POST" autocomplete="off">
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" />
    <input type="submit" value="Save" />
  </form>
  ```

  Here, autocomplete is turned off for the form.

---

#### 5. Sending Data Without a Page Refresh (Optional)

While traditional form submissions reload the page, you can also handle form submissions asynchronously using JavaScript and AJAX to submit the form data without a page refresh. This creates a smoother user experience, especially for dynamic web applications.

Basic example using JavaScript:

```html
<form id="contactForm" action="/submit-contact" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>

  <input type="submit" value="Send" />
</form>

<script>
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting the traditional way

      const formData = new FormData(this);

      fetch("/submit-contact", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
        } else {
          alert("Form submission failed.");
        }
      });
    });
</script>
```

In this example, JavaScript intercepts the form submission, sends the data asynchronously using `fetch()`, and prevents the page from reloading.

---

#### Task for Today:

1. Create a form that uses both the `action` and `method` attributes.
2. Use the `GET` method for a form that retrieves data (e.g., a search form).
3. Use the `POST` method for a form that sends sensitive or large amounts of data.
4. (Optional) Implement file uploads with the `enctype` attribute.
5. (Optional) Experiment with asynchronous form submission using JavaScript and `fetch()`.

---

That wraps up Day 19! By the end of today, you'll have a solid understanding of how form actions and methods work, as well as how to choose the appropriate method depending on the type of form and data being submitted. These skills are key to building dynamic and interactive web forms.
