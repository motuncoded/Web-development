# Day 25: Forms with File Uploads
File uploads are a common requirement in web applications, allowing users to submit files such as images, documents, or other data. Today, we will explore how to create HTML forms that support file uploads, ensuring a user-friendly experience while handling various file types securely and efficiently.

---

## 1. Basic Structure of a File Upload Form
To create a form that allows file uploads, you will use the <input> element with the type="file" attribute. This enables users to browse and select files from their local system.

Basic Syntax:
```html
Copy code
<form action="upload.php" method="POST" enctype="multipart/form-data">
  <label for="fileUpload">Choose a file:</label>
  <input type="file" id="fileUpload" name="fileUpload" required>
  <button type="submit">Upload</button>
</form>
```
Key Attributes:
-action: Specifies the URL where the form data will be sent upon submission.
- method: Indicates the HTTP method to be used (typically POST for file uploads).
- enctype: Set to multipart/form-data to handle file uploads correctly.

## 2. Handling Multiple File Uploads
To allow users to upload multiple files at once, you can add the multiple attribute to the file input.

Example:
```html
Copy code
<form action="upload.php" method="POST" enctype="multipart/form-data">
  <label for="fileUpload">Choose files:</label>
  <input type="file" id="fileUpload" name="files[]" multiple required>
  <button type="submit">Upload</button>
</form>
```
Note:
Use name="files[]" to treat the uploaded files as an array on the server side.

## 3. Restricting File Types
To enhance user experience and security, you can restrict the types of files users can upload using the accept attribute.

Example:
```html
Copy code
<form action="upload.php" method="POST" enctype="multipart/form-data">
  <label for="imageUpload">Upload an image:</label>
  <input type="file" id="imageUpload" name="imageUpload" accept="image/*" required>
  <button type="submit">Upload</button>
</form>
```
Accepted Formats:
Use accept="image/*" to allow any image format.
You can specify specific formats like accept=".jpg,.jpeg,.png,.gif".

## 4. Progress Indicators for File Uploads
To enhance user experience during file uploads, consider implementing a progress indicator. You can achieve this using JavaScript and the XMLHttpRequest API.

Example:
```html
Copy code
<form id="uploadForm" action="upload.php" method="POST" enctype="multipart/form-data">
  <label for="fileUpload">Choose a file:</label>
  <input type="file" id="fileUpload" name="fileUpload" required>
  <button type="submit">Upload</button>
</form>
<progress id="uploadProgress" value="0" max="100" style="display:none;"></progress>
<div id="status"></div>

<script>
document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const fileInput = document.getElementById('fileUpload');
  const progress = document.getElementById('uploadProgress');
  const status = document.getElementById('status');
  
  const formData = new FormData();
  formData.append('fileUpload', fileInput.files[0]);
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', this.action, true);

  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total) * 100;
      progress.value = percentComplete;
      progress.style.display = 'block';
    }
  };

  xhr.onload = function() {
    if (xhr.status === 200) {
      status.textContent = 'File uploaded successfully!';
    } else {
      status.textContent = 'File upload failed. Please try again.';
    }
  };

  xhr.send(formData);
});
</script>
```
Features:
Displays a progress bar to indicate upload progress.
Provides feedback upon successful or failed uploads.


## 5. Server-Side Handling of File Uploads
On the server side, you'll need to handle the uploaded files properly. Here's a basic example using PHP:

Example (PHP):
```php
Copy code
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES['fileUpload']['name']);
    
    // Check if file is a valid upload
    if (move_uploaded_file($_FILES['fileUpload']['tmp_name'], $targetFile)) {
        echo "The file " . htmlspecialchars(basename($_FILES['fileUpload']['name'])) . " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
```
Key Functions:
move_uploaded_file(): Moves the uploaded file to a specified directory.
Ensure proper validation and sanitization of uploaded files to prevent security vulnerabilities.

## 6. Best Practices for File Uploads
Validate file types and sizes: Always validate file types and sizes on both client and server sides to enhance security.
Limit file size: Use server-side settings to limit the size of uploaded files.
Store files securely: Avoid storing files in publicly accessible directories to prevent unauthorized access.
Provide user feedback: Always inform users of the upload status, success, or errors.
