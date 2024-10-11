### Day 10: File Uploads

Today, we will focus on implementing file upload inputs, which allow users to select and upload files from their device. This type of input is commonly used in forms for uploading documents, images, or other media. As with other form elements, accessibility remains crucial, so you’ll learn how to apply ARIA attributes to file upload inputs.

---

#### Goals for Day 10:
- Learn the HTML structure for file upload inputs.
- Understand how to accept specific file types.
- Implement ARIA attributes for better accessibility.
- Customize the file input appearance with CSS.

---

#### 1. File Upload Input Basics
The `<input type="file">` element is used to create a file upload field. Here's the basic structure:

```html
<form>
  <label for="resume">Upload your resume:</label>
  <input type="file" id="resume" name="resume">
</form>
```

#### 2. Accepting Specific File Types
To limit the file types a user can upload, you can use the `accept` attribute. This ensures that only files with specific extensions or MIME types are selectable.

Example for accepting only image files:

```html
<form>
  <label for="profile-picture">Upload your profile picture:</label>
  <input type="file" id="profile-picture" name="profile-picture" accept="image/*">
</form>
```

Example for accepting specific document types (e.g., PDF and DOCX):

```html
<form>
  <label for="cv">Upload your CV:</label>
  <input type="file" id="cv" name="cv" accept=".pdf, .docx">
</form>
```

#### 3. Accessibility with ARIA
To make file inputs more accessible, use ARIA attributes to describe the file input and provide better feedback for assistive technologies:

- **`aria-labelledby`**: Associates the input with a descriptive label.
- **`aria-describedby`**: Provides additional information about the file input, such as acceptable file types or file size limits.

Example:

```html
<form>
  <label id="upload-label" for="document">Upload a document:</label>
  <input type="file" id="document" name="document" aria-labelledby="upload-label" aria-describedby="file-requirements">
  <span id="file-requirements">Only PDF, DOCX files. Max 5MB.</span>
</form>
```

#### 4. Customizing File Inputs with CSS
The default file input is difficult to style directly, but you can hide the default input and use a custom button with some CSS tricks.

Example:

```html
<style>
  .custom-file-upload {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #4caf50; /* Primary color */
    color: white;
    border-radius: 5px;
    font-size: 16px;
  }

  input[type="file"] {
    display: none; /* Hide the default input */
  }
</style>

<form>
  <label for="file-upload" class="custom-file-upload">
    Choose a file
  </label>
  <input type="file" id="file-upload" name="file">
</form>
```

With this approach, clicking on the styled label will trigger the file input.

---

#### Task for Today:
1. Create a form that allows users to upload files (e.g., upload an image, document, or profile picture).
2. Use the `accept` attribute to restrict file types.
3. Use ARIA attributes to improve accessibility.
4. Customize the file input’s appearance using a custom button.

---

That’s it for Day 10! By the end of today, you will have a solid understanding of how to implement file upload inputs, restrict file types, and make them accessible while customizing their appearance.