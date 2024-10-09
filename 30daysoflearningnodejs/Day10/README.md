# Day 10: Error Handling and Logging in Express.js

Welcome to Day 10 of your Node.js learning journey! Today, you'll focus on Error Handling and Logging, two critical aspects of building robust and maintainable applications. Proper error handling ensures your application can gracefully handle unexpected situations, while effective logging helps in monitoring, debugging, and maintaining your application.

## 🛠 Step 1: Understanding Error Handling in Express.js

Express.js provides a robust way to handle errors in your application. There are two main types of errors you'll encounter:

- Synchronous Errors: Errors that occur during the execution of synchronous code.
- Asynchronous Errors: Errors that occur in asynchronous operations like database queries, API calls, etc.
  **Handling Synchronous Errors**
  For synchronous code, you can use try-catch blocks to catch and handle errors.

```javascript
app.get("/example", (req, res) => {
  try {
    // Some synchronous operation that might throw an error
    const result = riskyOperation();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
```

**Handling Asynchronous Errors**
For asynchronous code (using Promises or async/await), errors need to be passed to Express's error-handling middleware.

Using Async/Await with Express

```javascript
app.get("/async-example", async (req, res, next) => {
  try {
    const data = await someAsyncOperation();
    res.json(data);
  } catch (err) {
    next(err); // Passes the error to the error-handling middleware
  }
});
```

## 🛠 Step 2: Implementing Custom Error Handlers

Express allows you to define custom error-handling middleware. These functions have four parameters: err, req, res, and next.

Creating an Error-Handling Middleware
Create a new file middleware/errorHandler.js:

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    // Optionally include stack trace in development
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
```

Using the Error-Handling Middleware
In your index.js (or main server file), import and use the error handler after all other middleware and routes.

```javascript
const express = require("express");
const connectDB = require("./db");
const User = require("./models/User");
const Product = require("./models/Product");
const errorHandler = require("./middleware/errorHandler"); // Import error handler

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

/** --- USERS ROUTES --- */
// ... (Your existing user routes)

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

// Error Handling Middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

Creating Custom Error Classes
To make error handling more structured, you can create custom error classes.

```javascript
// utils/AppError.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
```

Using Custom Error Classes in Routes

```javascript
const AppError = require("./utils/AppError");

// Example: User Registration Route with Custom Errors
app.post("/auth/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new AppError("Name, email, and password are required.", 400));
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new AppError("Email already in use.", 400));
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    next(new AppError("Server error.", 500));
  }
});
```

## 🛠 Step 3: Setting Up Logging with Morgan and Winston

Logging is essential for monitoring application behavior, debugging, and maintaining your application.

- 1. Installing Logging Libraries
     We'll use Morgan for HTTP request logging and Winston for general logging.

```bash
npm install morgan winston
```

- 2. Configuring Morgan
     Morgan is an HTTP request logger middleware for Node.js.

```javascript
const morgan = require("morgan");

// Use Morgan middleware for logging HTTP requests in 'dev' format
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
```

- 3. Configuring Winston
     Winston is a versatile logging library that allows you to log messages to different transports (e.g., files, consoles).

Setting Up Winston
Create a new file utils/logger.js:

```javascript
// utils/logger.js
const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    // Log all levels to combined.log
    new transports.File({ filename: "logs/combined.log" }),
    // Log only errors to error.log
    new transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

// If not in production, also log to the console with simple format
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}

module.exports = logger;
```

Using Winston in Your Application
Import and use the logger in your index.js and error handler.

```javascript
const logger = require("./utils/logger");

// Replace console.log with logger.info
logger.info("Server starting...");

// In errorHandler.js
const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
  logger.error(
    `${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`,
  );

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
```

- 4. Directory Structure for Logs
     Ensure you have a logs directory in your project root to store log files.

```bash
mkdir logs
```

## 🛠 Step 4: Best Practices for Error Handling and Logging

Error Handling Best Practices

- Consistent Error Responses: Ensure that your API returns consistent error responses with appropriate status codes and messages.
- Hide Sensitive Information: Do not expose stack traces or sensitive information in production environments.
- Use Custom Error Classes: Implement custom error classes to differentiate between operational errors and programming errors.
- Centralize Error Handling: Use centralized error-handling middleware to manage all errors uniformly.

Logging Best Practices

- Log Levels: Use appropriate log levels (error, warn, info, debug) to categorize log messages.
- Avoid Logging Sensitive Data: Do not log sensitive information like passwords, tokens, or personal user data.
- Use Structured Logging: Log in a structured format (e.g., JSON) to facilitate easier searching and analysis.
- Rotate Logs: Implement log rotation to prevent log files from growing indefinitely.
- Monitor Logs: Use log monitoring tools or services to keep track of application behavior and detect issues early.

## 🛠 Step 5: Integrating Logging and Error Handling in Your Application

Updating Your Express Server with Logging and Error Handling
Here's how your index.js might look after integrating Morgan and Winston for logging, and setting up custom error handling.

```javascript
require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const morgan = require('morgan');
const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');
const AppError = require('./utils/AppError');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Morgan HTTP request logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    logger.info('Morgan enabled for HTTP request logging.');
}

// Import Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const postRoutes = require('./routes/posts'); // If you have posts

// Use Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
// app.use('/posts', postRoutes); // If you have posts

// 404 Not Found Middleware
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error Handling Middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    logger.info(`Server running on http://localhost:${port}`);
});
Example: Using Logger in Routes
javascript
Copy code
// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');

const router = express.Router();

// User Registration Route
router.post('/register', async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return next(new AppError('All fields are required.', 400));
    }

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
});

// User Login Route
router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Email and password are required.', 400));
    }

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
});

module.exports = router;
```

## 🛠 Step 6: Testing Your Error Handling and Logging

1. Testing Error Handling
   Trigger a 404 Error:

Access a non-existent route, e.g., http://localhost:3000/nonexistent.
Expected Response:

```json
Copy code
{
    "message": "Can't find /nonexistent on this server!"
}
```

Logged Error:
arduino
404 - Can't find /nonexistent on this server! - GET - ::1

Trigger a 500 Error:

Modify a route to throw an error intentionally.
Example:

````javascript
app.get('/error', (req, res, next) => {
    throw new Error('Intentional Server Error');
});
Access http://localhost:3000/error.
Expected Response:
```json
Copy code
{
    "message": "Internal Server Error",
    "stack": "Error: Intentional Server Error\n    at ... (only in development)"
}
````

Logged Error:
vbnet
Copy code
500 - Internal Server Error - GET - ::1 2. Testing Logging
HTTP Request Logging with Morgan:

Access various routes and observe the terminal for Morgan logs in development mode.
Example:

```bash
GET /users 200 12.345 ms - 123
POST /auth/register 201 45.678 ms - 45
Application Logging with Winston:

```

Check logs/combined.log and logs/error.log for logged messages.

Example combined.log:

````json
{
    "level": "info",
    "message": "Server running on http://localhost:3000",
    "timestamp": "2024-04-27 14:30:00"
}
{
    "level": "info",
    "message": "New user registered: Alice Johnson",
    "timestamp": "2024-04-27 14:31:00"
}
{
    "level": "info",
    "message": "User logged in: Alice Johnson",
    "timestamp": "2024-04-27 14:32:00"
}
Example error.log:

json
Copy code
{
    "level": "error",
    "message": "500 - Internal Server Error - GET - /error - ::1",
    "timestamp": "2024-04-27 14:33:00"
}```
## 🛠 Step 7: Implementing More Robust Error Handling
Handling Mongoose Validation Errors
Mongoose validation errors can be handled specifically to provide more meaningful responses.

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
````

Throwing Errors in Async/Await Functions
To avoid repetitive try-catch blocks, you can create a helper function to catch errors in asynchronous routes.

```javascript
// utils/catchAsync.js
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = catchAsync;
```

Using the catchAsync Helper

````javascript
const catchAsync = require('./utils/catchAsync');

// Example: User Registration Route using catchAsync
router.post('/register', catchAsync(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return next(new AppError('All fields are required.', 400));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return next(new AppError('Email already in use.', 400));
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    logger.info(`New user registered: ${newUser.fullName}`);

    res.status(201).json({ message: 'User registered successfully.' });
}));
💡```
````
