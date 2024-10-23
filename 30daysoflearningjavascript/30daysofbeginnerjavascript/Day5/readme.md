### Day 5: Operators

#### **Objective:**
- Understand the different types of operators used in JavaScript to perform various operations on variables and values.

#### **Key Topics:**
1. **Arithmetic Operators**
   - Perform basic mathematical operations.
   - **Operators**: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus), `++` (increment), `--` (decrement).

   **Example:**
   ```javascript
   let a = 10;
   let b = 5;
   console.log(a + b); // Output: 15
   console.log(a % b); // Output: 0
   ```

2. **Assignment Operators**
   - Assign values to variables.
   - **Operators**: `=` (assign), `+=`, `-=`, `*=`, `/=`, `%=`, etc.

   **Example:**
   ```javascript
   let x = 10;
   x += 5; // Equivalent to x = x + 5
   console.log(x); // Output: 15
   ```

3. **Comparison Operators**
   - Compare two values and return a boolean result (true/false).
   - **Operators**: `==` (equal to), `===` (strict equal), `!=` (not equal to), `!==` (strict not equal), `>` (greater than), `<` (less than), `>=`, `<=`.

   **Example:**
   ```javascript
   let age = 18;
   console.log(age >= 18); // Output: true
   ```

4. **Logical Operators**
   - Combine multiple conditions and return boolean results.
   - **Operators**: `&&` (AND), `||` (OR), `!` (NOT).

   **Example:**
   ```javascript
   let isAdult = true;
   let hasLicense = false;
   console.log(isAdult && hasLicense); // Output: false
   ```

5. **String Operators**
   - Perform operations on strings.
   - **Operator**: `+` (concatenation).

   **Example:**
   ```javascript
   let firstName = "John";
   let lastName = "Doe";
   console.log(firstName + " " + lastName); // Output: John Doe
   ```

6. **Ternary (Conditional) Operator**
   - Shorthand for `if-else` statement.
   - **Syntax**: `condition ? exprIfTrue : exprIfFalse`

   **Example:**
   ```javascript
   let age = 20;
   let canDrive = age >= 18 ? "Yes" : "No";
   console.log(canDrive); // Output: Yes
   ```

#### **Task:**
- Write a program that uses different types of operators to perform operations on variables. Test your understanding of arithmetic, assignment, comparison, and logical operators.

#### **Example:**
```javascript
let a = 5;
let b = 10;

let result = a + b; // Arithmetic
console.log(result); // Output: 15

result -= 3; // Assignment
console.log(result); // Output: 12

let isEqual = a == b; // Comparison
console.log(isEqual); // Output: false

let condition = a < b && b > 0; // Logical
console.log(condition); // Output: true
```

By the end of the day, you should be comfortable using operators to manipulate values in JavaScript.