### Day 9: File Input

#### **Task:**
Create an HTML form that allows users to upload a file using the file input field.

#### **Objective:**
- Learn how to use the `<input>` element with `type="file"` to allow file uploads.
- Understand how to handle single and multiple file uploads.

#### **Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File Input Example</title>
</head>
<body>

  <form action="/upload" method="POST" enctype="multipart/form-data">
    <label for="file-upload">Upload a file:</label>
    <input type="file" id="file-upload" name="file" required>
    
    <input type="submit" value="Submit">
  </form>

</body>
</html>
```

#### **Key Elements:**

- **`<input type="file">`**: Creates a file input that lets users select a file from their device.
- **`enctype="multipart/form-data"`**: Ensures the form can handle file uploads by encoding the file in the form data.
- **`required`**: Ensures that a file must be selected before the form can be submitted.

#### **Multiple File Uploads:**

To allow the user to upload more than one file, add the `multiple` attribute to the file input.

```html
<input type="file" id="file-upload" name="files[]" multiple>
```

This allows users to select multiple files at once.