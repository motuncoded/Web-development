### Day 9: File Input

#### **Objective:**

Understand how to use file input types to allow users to upload files through an HTML form.

- **Tasks:**
  - Create a file upload input field using `<input type="file">`.
  - Learn how to select single and multiple files.
  - Discuss file types and how to validate user input.
- **Resource:** [HTML File Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)

#### **Example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File Input Example</title>
  </head>
  <body>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <label for="file-upload">Upload a file:</label>
      <input type="file" id="file-upload" name="file" required />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

#### **Key Elements:**

- **`<input type="file">`**: Creates an input that allows users to choose a file from their device.
- **`enctype="multipart/form-data"`**: Ensures that the form can handle file uploads properly.
- **`required`**: Makes sure that users cannot submit the form without selecting a file.

#### **Multiple File Uploads:**

To allow users to upload multiple files, add the `multiple` attribute:

```html
<input type="file" id="file-upload" name="files[]" multiple />
```

This enables the selection of more than one file at once.

#### **Best Practices:**

- Ensure the form uses the correct encoding type (`multipart/form-data`).
- Validate file types and sizes on both the client and server side.
- Provide feedback to users on the allowed file formats or size limits to avoid errors during submission.
