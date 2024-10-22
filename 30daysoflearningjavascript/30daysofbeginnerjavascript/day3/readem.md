### Day 3: JavaScript Basics

#### Overview
Today, you'll learn the basic building blocks of JavaScript. This includes variables, data types, operators, and basic control structures like conditionals and loops.

#### Objectives
- Understand variables and how to declare them.
- Learn about JavaScript data types.
- Get familiar with operators and expressions.
- Understand basic control structures: conditionals and loops.

#### Key Concepts

### 1. **Variables**
Variables are used to store values that can be used and manipulated later in your code.

- **Declaration**:
  - `var`: Old way to declare variables.
  - `let`: Modern way to declare block-scoped variables.
  - `const`: Declares a constant that cannot be reassigned.
  
  **Example**:
  ```javascript
  let name = 'John';
  const age = 30;
  var city = 'New York';
  ```

### 2. **Data Types**
JavaScript has several data types:

- **Primitive Types**:
  - **String**: Text values, e.g., `'Hello'`, `"World"`
  - **Number**: Numeric values, e.g., `42`, `3.14`
  - **Boolean**: True or false, e.g., `true`, `false`
  - **Undefined**: A variable that hasn't been assigned a value.
  - **Null**: Represents an intentional absence of value.
  
  **Example**:
  ```javascript
  let name = 'Alice'; // String
  let age = 25;      // Number
  let isStudent = true;  // Boolean
  let middleName;    // Undefined
  let result = null; // Null
  ```

### 3. **Operators**
Operators are used to perform operations on variables and values.

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Assignment Operators**: `=`, `+=`, `-=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`
- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)

**Example**:
```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a > b); // true
console.log(a === 10 && b === 5); // true
```

### 4. **Control Structures**

#### 4.1. **Conditionals**:
Conditionals allow you to execute certain blocks of code based on conditions.

- **if/else** statement:
  ```javascript
  let age = 20;
  
  if (age >= 18) {
      console.log('You are an adult');
  } else {
      console.log('You are a minor');
  }
  ```

- **Ternary Operator** (shorthand for if/else):
  ```javascript
  let isAdult = (age >= 18) ? 'Yes' : 'No';
  console.log(isAdult); // Yes
  ```

#### 4.2. **Loops**:
Loops let you repeat blocks of code multiple times.

- **for** loop:
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```

- **while** loop:
  ```javascript
  let count = 0;
  
  while (count < 5) {
      console.log(count);
      count++;
  }
  ```

### Example Program:

```javascript
let name = 'John';
let age = 20;

if (age >= 18) {
    console.log(`${name} is an adult`);
} else {
    console.log(`${name} is a minor`);
}

for (let i = 1; i <= 5; i++) {
    console.log('Iteration number', i);
}
```

### Learning Resources:
- **JavaScript Basics**: [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- **JavaScript Variables**: [W3Schools - Variables](https://www.w3schools.com/js/js_variables.asp)

### Task:
- Create a JavaScript program that:
  - Declares a few variables of different types.
  - Uses conditionals to check certain conditions.
  - Implements a loop to display numbers 1 through 5 in the console.

---

By the end of Day 3, you should have a solid understanding of JavaScript basics and how to use them in simple programs!