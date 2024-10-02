# 📅 Day 11: Data Validation and Sanitization in Express.js Using express-validator
Welcome to Day 11 of your Node.js learning journey! Today, you'll focus on Data Validation and Sanitization, essential practices to ensure the integrity and security of the data your application handles. Proper validation and sanitization prevent invalid or malicious data from entering your system, enhancing both reliability and security.

## 🛠 Step 1: Understanding Data Validation and Sanitization

### **Data Validation**
Definition: Ensuring that the data provided by the user meets the required criteria before processing.
Purpose: Prevents invalid data from causing errors or unexpected behavior in your application.
Examples:
Ensuring required fields are present.
Verifying data types (e.g., email format, number ranges).
Data Sanitization
Definition: Cleaning or modifying user input to remove unwanted or malicious content.
Purpose: Protects against security vulnerabilities like SQL injection, XSS attacks, and ensures data consistency.
Examples:
Trimming whitespace.
Escaping special characters.
### 🛠 Step 2: Installing express-validator
express-validator is a popular library for validating and sanitizing user input in Express.js applications.

Installation
Run the following command in your project directory:

```bash
npm install express-validator
```

### 🛠 Step 3: Setting Up express-validator in Your Application
- Import Required Functions
In your route files (e.g., routes/users.js, routes/products.js, routes/auth.js), import the necessary functions from express-validator:

```javascript
const { body, validationResult } = require('express-validator');
```
-- Create a Validation Middleware
Define a middleware function to handle validation results:

```javascript
// middleware/validate.js
const { validationResult } = require('express-validator');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Log the validation errors
        logger.warn(`Validation errors: ${JSON.stringify(errors.array())}`);
        // Create a formatted error message
        const extractedErrors = errors.array().map(err => ({ [err.param]: err.msg }));
        // Pass the error to the error handling middleware
        return next(new AppError('Validation Error', 400, extractedErrors));
    }
    next();
};

module.exports = validate;
```
- Define Validation Rules
Apply validation rules to your routes using express-validator functions like body, param, etc.

Example: User Registration Route
```javascript
// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { body } = require('express-validator');
const validate = require('../middleware/validate');

const router = express.Router();

// User Registration Route with Validation
router.post(
    '/register',
    [
        body('firstName')
            .trim()
            .notEmpty().withMessage('First name is required.')
            .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long.'),
        body('lastName')
            .trim()
            .notEmpty().withMessage('Last name is required.')
            .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long.'),
        body('email')
            .trim()
            .notEmpty().withMessage('Email is required.')
            .isEmail().withMessage('Invalid email format.')
            .normalizeEmail(),
        body('password')
            .notEmpty().withMessage('Password is required.')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
            .matches(/\d/).withMessage('Password must contain a number.'),
    ],
    validate,
    async (req, res, next) => {
        const { firstName, lastName, email, password } = req.body;

        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return next(new AppError('Email already in use.', 400));
            }

            const newUser = new User({ firstName, lastName, email, password });
            await newUser.save();

            logger.info(`New user registered: ${newUser.fullName}`);

            res.status(201).json({ message: 'User registered successfully.' });
        } catch (err) {
            next(new AppError('Server error.', 500));
        }
    }
);

module.exports = router;
```
### 🛠 Step 4: Applying Validation to Other Routes
- 1. User Login Route
```javascript
// routes/auth.js
router.post(
    '/login',
    [
        body('email')
            .trim()
            .notEmpty().withMessage('Email is required.')
            .isEmail().withMessage('Invalid email format.')
            .normalizeEmail(),
        body('password')
            .notEmpty().withMessage('Password is required.')
    ],
    validate,
    async (req, res, next) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return next(new AppError('Invalid email or password.', 400));
            }

            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return next(new AppError('Invalid email or password.', 400));
            }

            const payload = { userId: user._id, email: user.email };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

            logger.info(`User logged in: ${user.fullName}`);

            res.status(200).json({ message: 'Login successful.', token });
        } catch (err) {
            next(new AppError('Server error.', 500));
        }
    }
);
```
- 2. Adding a New Product
```javascript
// routes/products.js
const express = require('express');
const Product = require('../models/Product');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Add a New Product with Validation
router.post(
    '/',
    authenticateToken,
    [
        body('name')
            .trim()
            .notEmpty().withMessage('Product name is required.')
            .isLength({ min: 2 }).withMessage('Product name must be at least 2 characters long.'),
        body('price')
            .notEmpty().withMessage('Price is required.')
            .isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0.'),
        body('description')
            .optional()
            .trim()
            .isLength({ max: 500 }).withMessage('Description can be up to 500 characters long.')
    ],
    validate,
    async (req, res, next) => {
        const { name, price, description } = req.body;

        try {
            const newProduct = new Product({ name, price, description });
            await newProduct.save();

            logger.info(`New product added: ${newProduct.name}`);

            res.status(201).json({ message: 'Product added.', product: newProduct });
        } catch (err) {
            next(new AppError('Server error.', 500));
        }
    }
);

module.exports = router;
```
- 3. Updating a User
```javascript
// routes/users.js
const express = require('express');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Update a User with Validation
router.put(
    '/:id',
    authenticateToken,
    [
        param('id')
            .isMongoId().withMessage('Invalid user ID.'),
        body('firstName')
            .optional()
            .trim()
            .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long.'),
        body('lastName')
            .optional()
            .trim()
            .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long.'),
        body('email')
            .optional()
            .trim()
            .isEmail().withMessage('Invalid email format.')
            .normalizeEmail(),
        body('password')
            .optional()
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
            .matches(/\d/).withMessage('Password must contain a number.')
    ],
    validate,
    async (req, res, next) => {
        const { id } = req.params;
        const { firstName, lastName, email, password } = req.body;

        try {
            const user = await User.findById(id);
            if (!user) {
                return next(new AppError('User not found.', 404));
            }

            if (firstName) user.firstName = firstName;
            if (lastName) user.lastName = lastName;
            if (email) user.email = email;
            if (password) user.password = password; // Will be hashed by middleware

            await user.save();

            logger.info(`User updated: ${user.fullName}`);

            res.json({ message: 'User updated.', user });
        } catch (err) {
            next(new AppError('Server error.', 500));
        }
    }
);

module.exports = router;
```
### 🛠 Step 5: Handling Validation Errors Gracefully
Ensure that your validate middleware and errorHandler are set up to provide meaningful error messages to the client.

Customizing Error Messages
In your middleware/validate.js, you can format the validation errors to provide clear feedback:

```javascript

// middleware/validate.js
const { validationResult } = require('express-validator');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Log the validation errors
        logger.warn(`Validation errors: ${JSON.stringify(errors.array())}`);
        // Create a formatted error message
        const extractedErrors = errors.array().map(err => ({ [err.param]: err.msg }));
        // Pass the error to the error handling middleware
        return next(new AppError('Validation Error', 400, extractedErrors));
    }
    next();
};

module.exports = validate;
```
Displaying Validation Errors in Responses
Update your errorHandler.js to include validation errors in the response:

```javascript

// middleware/errorHandler.js
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
        statusCode = 400;
        const errors = Object.values(err.errors).map(el => el.message);
        message = `Validation error: ${errors.join(', ')}`;
    }

    // Handle express-validator errors
    if (err.statusCode === 400 && err.message === 'Validation Error') {
        statusCode = 400;
        message = 'Validation Error';
        // Include the detailed validation errors if provided
        return res.status(statusCode).json({
            message,
            errors: err.errors, // Array of { field: message }
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        });
    }

    // Handle Mongoose duplicate key errors
    if (err.code && err.code === 11000) {
        statusCode = 400;
        const field = Object.keys(err.keyValue);
        message = `Duplicate field value entered for ${field}`;
    }

    res.status(statusCode).json({
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};

module.exports = errorHandler;
```
### 🛠 Step 6: Best Practices for Data Validation and Sanitization
- 1. Validate All Incoming Data
Ensure that all user inputs are validated, including query parameters, headers, and body data.
- 2. Use Appropriate Validation Rules
Apply the right validation rules based on the data type and requirements (e.g., email format, password complexity).
- 3. Sanitize User Inputs
Clean user inputs to remove harmful data. express-validator provides  sanitization methods like trim(), escape(), and normalizeEmail().
- 4. Centralize Validation Logic
Keep validation rules close to the route definitions for better maintainability.
- 5. Avoid Over-Validation
Only validate necessary fields to maintain performance and avoid unnecessary complexity.
- 6. Provide Clear Error Messages
Ensure that error messages are descriptive and helpful, guiding users to correct their inputs.
### 🛠 Step 7: Testing Your Validation and Sanitization
Using Postman
Register a New User with Invalid Data

URL: http://localhost:3000/auth/register
Method: POST
Body: JSON
json
Copy code
{
    "firstName": "A",
    "lastName": "",
    "email": "invalidemail",
    "password": "123"
}
Expected Response:
```json
Copy code
{
    "message": "Validation Error",
    "errors": [
        { "firstName": "First name must be at least 2 characters long." },
        { "lastName": "Last name is required." },
        { "email": "Invalid email format." },
        { "password": "Password must be at least 6 characters long." },
        { "password": "Password must contain a number." }
    ]
}
```
Add a New Product with Missing Fields

URL: http://localhost:3000/products
Method: POST
Headers:
Authorization: Bearer YOUR_JWT_TOKEN_HERE
Body: JSON
```json
Copy code
{
    "name": "",
    "price": -10,
    "description": "This is a test product."
}
Expected Response:
json
Copy code
{
    "message": "Validation Error",
    "errors": [
        { "name": "Product name is required." },
        { "price": "Price must be a number greater than 0." }
    ]
}
```
Login with Invalid Credentials

URL: http://localhost:3000/auth/login
Method: POST
Body: JSON
```json
Copy code
{
    "email": "nonexistent@example.com",
    "password": "wrongpassword"
}
Expected Response:
```json
Copy code
{
    "message": "Invalid email or password."
}```
Update a User with Invalid ID

URL: http://localhost:3000/users/invalidid
Method: PUT
Headers:
Authorization: Bearer YOUR_JWT_TOKEN_HERE
Body: JSON
```json
{
    "firstName": "Updated Name"
}
```
Expected Response:
```json
{
    "message": "Validation Error",
    "errors": [
        { "id": "Invalid user ID." }
    ]
}
```
Using cURL
Register a New User with Valid Data

```bash
curl -X POST -H "Content-Type: application/json" -d '{"firstName":"John","lastName":"Doe","email":"john.doe@example.com","password":"Password123"}' http://localhost:3000/auth/register
```
Expected Response:
```json
{
    "message": "User registered successfully."
}```
Add a New Product with Valid Data

```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" -d '{"name":"Laptop","price":999.99,"description":"A high-end laptop."}' http://localhost:3000/products 
```
Expected Response:
```json
{
    "message": "Product added.",
    "product": {
        "_id": "60d6f0b6f8d2e45a3c8b4568",
        "name": "Laptop",
        "price": 999.99,
        "description": "A high-end laptop.",
        "createdAt": "2024-04-25T11:00:00.000Z",
        "updatedAt": "2024-04-25T11:00:00.000Z",
        "__v": 0
    }
}
```
### 🛠 Step 8: Enhancing Existing Routes with Validation and Sanitization
- 1. Updating the User Model
Ensure that your User model includes the necessary fields and validations:

```javascript
Copy code
// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: { // Updated fields
        type: String,
        required: true,
    },
    lastName: { // Updated fields
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
}, { timestamps: true });

// Virtual for user's full name
UserSchema.virtual('fullName').get(function


```
