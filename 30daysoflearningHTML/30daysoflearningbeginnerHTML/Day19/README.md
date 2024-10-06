# Day 19: Data Attributes
Data attributes are custom attributes that allow you to store extra information directly in HTML elements. They are particularly useful when you want to add information to an element without using non-standard attributes or affecting the presentation of the page. Data attributes are often used with JavaScript to store and access custom data.

Today, we'll explore how to use data attributes and how they can be beneficial in your HTML and JavaScript.

## 1. What Are Data Attributes?
Data attributes are defined using the data-* syntax. You can store additional information on any HTML element by prefixing custom attributes with data-.

Basic Syntax:
```html
Copy code
<div data-name="John Doe" data-age="30">Hello, John Doe!</div>
```
In the example above:

data-name="John Doe": Stores the name.
data-age="30": Stores the age.
## 2. Why Use Data Attributes?
Data attributes offer a flexible way to store information that:

Can be used by JavaScript to modify or interact with an element.
Is not visible to the user, keeping your markup clean.
Does not interfere with standard HTML attributes.
## 3. Common Use Cases
- Dynamic Content:
Storing data for later use, such as user information or status updates.

- JavaScript Interaction:
Allowing JavaScript to access custom data stored in the DOM and manipulate it.
- Accessibility:
Providing additional information for screen readers or other assistive technologies

- Tracking:
Using data attributes to store analytics or tracking information (like user actions).

- Custom Attributes for Styling:
You can use data attributes as hooks for JavaScript-based styling or functionality (e.g., toggling themes).

## 4. How to Use Data Attributes
Example: Storing Data in HTML Elements
In this example, a list of products is displayed, and each product has custom data attributes for the price and availability:

```html
Copy code
<ul>
  <li data-id="101" data-price="29.99" data-available="true">Product 1</li>
  <li data-id="102" data-price="49.99" data-available="false">Product 2</li>
  <li data-id="103" data-price="19.99" data-available="true">Product 3</li>
</ul>
```
Each `<li>` element holds information about a product:

- data-id="101": Stores a unique product ID.
- data-price="29.99": Stores the product price.
- data-available="true": Stores the product's availability status.

## 5. Accessing Data Attributes with JavaScript
JavaScript allows you to easily access and manipulate data attributes using the dataset property.

Accessing Data Attributes:
```javascript
Copy code
const product = document.querySelector('li');
console.log(product.dataset.id);        // Output: "101"
console.log(product.dataset.price);     // Output: "29.99"
console.log(product.dataset.available); // Output: "true"
```
The dataset property creates a DOMStringMap object that provides easy access to all data attributes of an element. The keys are derived from the attribute names by removing the data- prefix and converting any hyphens to camel case.

Modifying Data Attributes:
You can also modify data attributes dynamically using JavaScript:

```javascript
Copy code
product.dataset.price = "39.99"; // Update the price
console.log(product.dataset.price); // Output: "39.99"
```

### 6. Advanced Example: Toggle Feature with Data Attributes
Here’s an example where data attributes are used to toggle the visibility of content:

html
Copy code
<button id="toggle" data-status="hidden">Show Content</button>
<div id="content" style="display: none;">This is the hidden content.</div>

<script>
  const button = document.getElementById('toggle');
  const content = document.getElementById('content');

  button.addEventListener('click', () => {
    if (button.dataset.status === 'hidden') {
      content.style.display = 'block';
      button.dataset.status = 'visible';
      button.textContent = 'Hide Content';
    } else {
      content.style.display = 'none';
      button.dataset.status = 'hidden';
      button.textContent = 'Show Content';
    }
  });
</script>
- data-status="hidden": The button starts with a data-status attribute that is hidden.
- The JavaScript changes the button’s text and toggles the visibility of the content based on the value of the data attribute.

## 7. Customizing Styles with Data Attributes
Data attributes can also be used in CSS to apply specific styles to elements. Here's how you can style elements based on their data attributes:

CSS Example:
```css
Copy code
li[data-available="false"] {
  color: red;
}

li[data-available="true"] {
  color: green;
}
```
In this example, items that have data-available="false" will be styled with a red color, while items with data-available="true" will be styled in green.

## 8. Best Practices for Using Data Attributes
- Semantic Use: Always make sure the data stored in the attributes is meaningful and relevant to the element. Avoid using data attributes to store information that could be placed in the DOM using existing HTML elements.

- Performance: Data attributes are often more performant for small amounts of data. However, for large data sets or frequent updates, consider using external data stores (like local storage or server-side databases) to avoid performance degradation.

- Security: Since data attributes are accessible from the front end, do not store sensitive information (like passwords or private tokens) in them.
