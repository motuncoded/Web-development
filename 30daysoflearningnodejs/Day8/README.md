# 📅 Day 7: Implementing Authentication and Authorization with JWT in Express.js

Welcome to **Day 7** of your Node.js learning journey! Today, you'll learn how to secure your RESTful API by implementing **authentication** and **authorization** using **JSON Web Tokens (JWT)**. This will enable you to protect your routes and ensure that only authorized users can access certain resources.

---

## 🎯 **Goals for Day 7**
- Understand the concepts of **authentication** and **authorization**.
- Learn what **JWT (JSON Web Tokens)** are and how they work.
- Implement user **registration** and **login** functionality.
- Protect your API routes using **JWT-based authentication**.
- Handle **role-based authorization** to restrict access based on user roles.

---

## 📚 **Understanding Authentication and Authorization**

### **Authentication vs. Authorization**
- **Authentication**: Verifying the identity of a user. Ensures that the user is who they claim to be.
- **Authorization**: Determining what an authenticated user is allowed to do. Controls access to resources based on user roles or permissions.

### **Why Use JWT?**
- **Stateless**: JWTs are self-contained and do not require server-side sessions.
- **Secure**: Can be signed and encrypted to ensure data integrity and confidentiality.
- **Scalable**: Suitable for distributed systems where maintaining sessions can be challenging.

---

## 🛠 **Step-by-Step Guide to Implementing JWT Authentication**

### 🧰 **Prerequisites**
- Completed **Day 6**: Building a RESTful API with Express.js.
- Basic understanding of **Express.js** and **JavaScript**.

### 📦 **Step 1: Install Required Packages**

You'll need to install a few additional packages to handle authentication:
- **bcrypt**: For hashing passwords.
- **jsonwebtoken**: For creating and verifying JWTs.
- **dotenv**: For managing environment variables.

Run the following command to install these packages:

```bash
npm install bcrypt jsonwebtoken dotenv
```
### 🔐 **Step 2: Set Up Environment Variables**
1. Create a .env file in the root of your project to store sensitive information like your JWT secret key.

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/nodeapp
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
```
Note: Replace your_jwt_secret_key with a strong, secure key. Never expose your secret key in public repositories.
- PORT: The port your server will run on.
- MONGO_URI: Your MongoDB connection string.
- JWT_SECRET: A secret key for signing JWTs. Ensure this is strong and kept confidential.
- JWT_EXPIRES_IN: Token expiration time (e.g., 1 hour).

2. Load Environment Variables in your application by adding the following line at the top of your index.js:

```javascript
require('dotenv').config();
```
### 🛠 Step 3: Update User Schema to Include Password
To handle user authentication, users need to have passwords. Update your User model to include a password field.

```javascript
// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: { // New field
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
```
### 🛠 Step 4: Implement User Registration and Login Routes
1. User Registration (Sign Up)
Route: POST /auth/register
Purpose: Allow new users to create an account by providing name, email, and password.
```javascript
// index.js (or routes/auth.js if using separate routes)
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// User Registration Route
app.post('/auth/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use.' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
});
2. User Login
Route: POST /auth/login
Purpose: Authenticate users by verifying email and password, then issue a JWT.
javascript
Copy code
// User Login Route
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Create JWT payload
        const payload = {
            userId: user._id,
            email: user.email,
        };

        // Sign JWT
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.status(200).json({ message: 'Login successful.', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
});
🛠 Step 5: Create Middleware to Protect Routes
To ensure that only authenticated users can access certain routes, create a middleware function that verifies JWTs.

javascript
Copy code
// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Get token from headers
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ message: 'Access token missing.' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token.' });
        }
        req.user = user; // Attach user info to request object
        next();
    });
};

module.exports = authenticateToken;
🛠 Step 6: Secure Your Routes Using the Middleware
Apply the authenticateToken middleware to routes that require authentication.

Example: Protecting the /users Routes
javascript
Copy code
const authenticateToken = require('./middleware/auth');

/** --- USERS ROUTES --- */

// Get all users (Protected)
app.get('/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new user (Protected)
app.post('/users', authenticateToken, async (req, res) => {
    const { name, email } = req.body;

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }

    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: 'User added', user: newUser });
    } catch (err) {
        if (err.code === 11000) { // Duplicate key error
            res.status(400).json({ message: 'Email already exists.' });
        } else {
            res.status(500).json({ message: err.message });
        }
    }
});

// Update a user (Protected)
app.put('/users/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();
        res.json({ message: 'User updated', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a user (Protected)
app.delete('/users/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.json({ message: 'User deleted', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
Example: Protecting the /products Routes
Similarly, apply the middleware to the products routes.

javascript
Copy code
/** --- PRODUCTS ROUTES --- */

// Get all products (Protected)
app.get('/products', authenticateToken, async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new product (Protected)
app.post('/products', authenticateToken, async (req, res) => {
    const { name, price, description } = req.body;

    // Basic validation
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required.' });
    }

    try {
        const newProduct = new Product({ name, price, description });
        await newProduct.save();
        res.status(201).json({ message: 'Product added', product: newProduct });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a product (Protected)
app.put('/products/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        if (name) product.name = name;
        if (price) product.price = price;
        if (description) product.description = description;

        await product.save();
        res.json({ message: 'Product updated', product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a product (Protected)
app.delete('/products/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.json({ message: 'Product deleted', product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
🛠 Step 7: Testing Your Authentication System
Using Postman:
Register a New User:

URL: http://localhost:3000/auth/register
Method: POST
Body: JSON
json
Copy code
{
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "password": "SecurePassword123"
}
Expected Response:
json
Copy code
{
    "message": "User registered successfully."
}
Login as the Registered User:

URL: http://localhost:3000/auth/login

Method: POST

Body: JSON

json
Copy code
{
    "email": "alice@example.com",
    "password": "SecurePassword123"
}
Expected Response:

json
Copy code
{
    "message": "Login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Note: Copy the token from the response for use in protected routes.

Access a Protected Route (e.g., Get All Users):

URL: http://localhost:3000/users
Method: GET
Headers:
Authorization: Bearer YOUR_JWT_TOKEN_HERE
Expected Response:
json
Copy code
[
    {
        "_id": "60d5f9f4f8d2e45a3c8b4567",
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "password": "$2b$10$EIXI1...",
        "createdAt": "2023-04-25T10:00:00.000Z",
        "updatedAt": "2023-04-25T10:00:00.000Z",
        "__v": 0
    }
]
Access Without Token:

Try accessing a protected route without the Authorization header.
Expected Response:
json
Copy code
{
    "message": "Access token missing."
}
Access with Invalid Token:

Use an incorrect or expired token.
Expected Response:
json
Copy code
{
    "message": "Invalid or expired token."
}
Using cURL:
Register a New User:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice Johnson","email":"alice@example.com","password":"SecurePassword123"}' http://localhost:3000/auth/register
Login as the Registered User:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"email":"alice@example.com","password":"SecurePassword123"}' http://localhost:3000/auth/login
Note: Copy the token from the response.
Access a Protected Route:

bash
Copy code
curl -X GET -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" http://localhost:3000/users
🛠 Step 8: Enhancing Security with Password Hashing
While we've already implemented password hashing using bcrypt, it's essential to ensure that passwords are always stored securely.

Example: Middleware for Password Hashing
To automatically hash passwords before saving a user, you can use Mongoose middleware.

javascript
Copy code
// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: { // Hashed password
        type: String,
        required: true,
    },
}, { timestamps: true });

// Mongoose middleware to hash password before saving
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('User', UserSchema);
Note: With this middleware, you no longer need to hash the password manually in the registration route. Simply assign the plain password, and it will be hashed automatically before saving.

javascript
Copy code
// Updated User Registration Route
app.post('/auth/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use.' });
        }

        // Create new user (password will be hashed by middleware)
        const newUser = new User({
            name,
            email,
            password, // Plain password
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
});


