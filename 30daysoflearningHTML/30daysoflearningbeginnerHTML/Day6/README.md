# Day 6: Tables in HTML

HTML tables are a way to display data in a grid-like structure of rows and columns. They are often used to present information like schedules, reports, and statistics. Below is a detailed explanation of how to create and style tables in HTML. z

## Objectives

- Learn how to create basic tables using HTML.
- Understand the significance of table headers, captions, and summaries.
- Practice structuring and styling tabular data.

## Key Concepts

### Basic Table Structure

- **`<table>`**: The container element for the table.
- **`<tr>`**: Defines a table row.
- **`<th>`**: Defines a header cell in a table (usually bold and centered).
- **`<td>`**: Defines a standard data cell in a table.

### Elements of a Table

- **`<caption>`**: Provides a title or description for the table, positioned above the table.
- **`<thead>`**: Groups the header content in the table, typically used with <th>.
- **`<tbody>`**: Groups the main body of the table, containing the data rows.
- **`<tfoot>`**: Groups footer content in the table, often used for summary information.

### Attributes of a Table

Global Attributes
Tables can use global attributes applicable to most HTML elements, such as:

- class: Assigns a class name for styling.
- id: Unique identifier for the table.
- style: Inline CSS styles.

Table-Specific Attributes

- border: Sets the border width of the table (deprecated in HTML5; use CSS instead).
- cellpadding: Defines the space between cell content and cell borders (deprecated; use CSS).
- cellspacing: Defines the space between cells (deprecated; use CSS).
  width, height: Defines the dimensions of the table (deprecated; use CSS).

### Styling Tables

- Use simple CSS properties to enhance table appearance, such as borders and padding.
- Consider alternate row coloring for better readability.

## Practice Exercise

### 1. Create a Simple Table

Create a table to display student grades with the following headers:

| Name  | Subject | Grade |
| ----- | ------- | ----- |
| Alice | Math    | A     |
| Bob   | Science | B     |
| Carol | History | A-    |

**HTML Example:**

### Accessibility Considerations

When creating tables, consider accessibility best practices:

- Use <th> elements to define headers, as screen readers use these for navigation.
- Use the scope attribute in <th> to specify the type of data it represents (e.g., scope="col" for column headers).
- Provide a <caption> to describe the table’s content for better context.
