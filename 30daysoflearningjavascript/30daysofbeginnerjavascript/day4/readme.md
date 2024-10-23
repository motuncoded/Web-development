### Day 4: Variables and Data Types

#### **Overview**
Today, you'll deepen your understanding of variables and data types in JavaScript. You'll learn how to declare variables using `let`, `const`, and `var`, and explore different data types in JavaScript, including strings, numbers, booleans, and objects.

#### **Objectives**
- Learn the difference between `var`, `let`, and `const`.
- Explore primitive and non-primitive data types.
- Practice using different types of data in variables.

### 1. **Declaring Variables**

In JavaScript, variables can be declared using `var`, `let`, or `const`.

- **`let`**: Allows you to declare variables that are block-scoped and can be reassigned.
- **`const`**: Declares block-scoped variables that cannot be reassigned.
- **`var`**: An older way to declare variables, which has function scope and should be avoided in modern JavaScript.

**Example**:
```javascript
let name = 'Alice';  // Can be reassigned later
const age = 25;      // Cannot be reassigned
var city = 'New York';  // Function-scoped, avoid using this
```

### 2. **Primitive Data Types**

JavaScript has several basic data types, known as primitive types. These are immutable and hold a single value.

- **String**: Text values.
  ```javascript
  let name = 'John Doe';
  ```

- **Number**: Numeric values (both integers and floating-point numbers).
  ```javascript
  let score = 95;
  ```

- **Boolean**: Logical values `true` or `false`.
  ```javascript
  let isLoggedIn = true;
  ```

- **Null**: Represents an intentional absence of any object value.
  ```javascript
  let result = null;
  ```

- **Undefined**: Represents a variable that has been declared but not assigned a value.
  ```javascript
  let value;
  ```

- **Symbol**: A unique and immutable value used for object properties (introduced in ES6).
  ```javascript
  let sym = Symbol('foo');
  ```

### 3. **Non-Primitive Data Types**

Non-primitive types include objects, arrays, and functions. These are mutable and can hold multiple values.

- **Object**: A collection of key-value pairs.
  ```javascript
  let person = {
      name: 'Alice',
      age: 30,
      city: 'New York'
  };
  ```

- **Array**: A list of values.
  ```javascript
  let colors = ['red', 'green', 'blue'];
  ```

- **Function**: A reusable block of code that performs a specific task.
  ```javascript
  function greet() {
      console.log('Hello, World!');
  }
  ```

### 4. **Dynamic Typing in JavaScript**

JavaScript is dynamically typed, meaning that variables are not bound to a specific type. The same variable can hold different types of data at different times.

**Example**:
```javascript
let data = 'Hello';  // Initially a string
data = 42;           // Now it's a number
```

### 5. **Type Coercion**

JavaScript automatically converts data types in certain situations, which is known as type coercion.

**Example**:
```javascript
let x = '5' + 2;   // The number 2 is coerced to a string, result is '52'
let y = '5' - 2;   // The string '5' is coerced to a number, result is 3
```

### 6. **Strict Equality vs. Loose Equality**

- **Loose Equality (`==`)**: Compares values after type coercion.
- **Strict Equality (`===`)**: Compares both value and type without type coercion.

**Example**:
```javascript
console.log(5 == '5');  // true (type coercion happens)
console.log(5 === '5'); // false (no type coercion)
```

### Example Program

```javascript
let name = 'John';      // String
let age = 30;           // Number
let isStudent = false;  // Boolean
let city;               // Undefined

console.log(name);      // Output: John
console.log(age);       // Output: 30
console.log(isStudent); // Output: false
console.log(city);      // Output: undefined

// Reassigning values
name = 'Alice';
age = 28;
console.log(name);  // Output: Alice
console.log(age);   // Output: 28
```

### Learning Resources:
- **JavaScript Data Types**: [MDN - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- **Variables in JavaScript**: [W3Schools - Variables](https://www.w3schools.com/js/js_variables.asp)

### Task:
- Create a JavaScript program that:
  - Declares variables with different data types.
  - Uses `const` for constants and `let` for variables that can change.
  - Implements type coercion and strict equality checks.

---

By the end of Day 4, you should have a good grasp of variables, data types, and how they are used in JavaScript!