# 📅 Day 7: Integrating MongoDB with Express.js Using Mongoose
Welcome to Day 7 of your Node.js learning journey! Today, you'll learn how to integrate MongoDB, a popular NoSQL database, with your Express.js application using Mongoose, an elegant MongoDB object modeling tool for Node.js. This integration will allow your RESTful API to interact with a real database, making your data persistent and scalable.

## 🛠 Step 1: Set Up MongoDB
###  Option 1: Using MongoDB Locally
Install MongoDB:
Follow the official MongoDB Installation Guide for your operating system.
- Start MongoDB:
After installation, start the MongoDB server.
For macOS and Linux:
```bash
mongod
```
For Windows:
Use the MongoDB Compass or start the MongoDB service via the Services panel.
### Option 2: Using MongoDB Atlas (Cloud-Based)
- Create an Account:

Go to MongoDB Atlas and sign up for a free account.
- Create a Cluster:

Follow the prompts to create a new cluster. Choose the free tier option.
- Configure Network Access:

Allow access from your IP address or allow access from anywhere (not recommended for production).
- Create a Database User:

Set up a username and password for your database.
- Get the Connection String:

After setting up the cluster, click "Connect" and get the connection string. Replace <password> with your database user's password and specify your database name.
## 🛠 Step 2: Install Mongoose
In your project directory, install Mongoose using npm:

```bash
npm install mongoose
```
## 🛠 Step 3: Connect to MongoDB Using Mongoose
Create a new file named db.js to handle the database connection.

```javascript
// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace the URI string with your MongoDB connection string.
        const uri = 'mongodb://localhost:27017/nodeapp'; // For local MongoDB
        // const uri = 'your-mongodb-atlas-connection-string'; // For MongoDB Atlas

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
Note: If you're using MongoDB Atlas, replace the uri variable with your Atlas connection string.
```
## 🛠 Step 4: Define Mongoose Schemas and Models
Create a new directory called models and add two files: User.js and Product.js.

1. User Model
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
    // Add more fields as needed
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
```
2. Product Model
```javascript
// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
```
## 🛠 Step 5: Update Your Express Server to Use Mongoose Models
Modify your index.js (or server.js) to connect to MongoDB and use the Mongoose models.

```javascript
// index.js
const express = require('express');
const connectDB = require('./db'); // Import the database connection
const User = require('./models/User'); // Import User model
const Product = require('./models/Product'); // Import Product model

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

/** --- USERS ROUTES --- */

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new user
app.post('/users', async (req, res) => {
    const { name, email } = req.body;

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: 'User added', user: newUser });
    } catch (err) {
        if (err.code === 11000) { // Duplicate key error
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: err.message });
        }
    }
});

// Update a user
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();
        res.json({ message: 'User updated', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

// Middleware for handling other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```
## 🛠 Step 6: Explanation
1. Database Connection (db.js)
Mongoose Connection:
The connectDB function establishes a connection to MongoDB using Mongoose.
It handles successful connections and catches errors, logging them to the console.
2. Mongoose Schemas and Models
User Schema:
Defines the structure of user documents in the users collection.
Includes fields like name and email with validation rules.
Product Schema:
Defines the structure of product documents in the products collection.
Includes fields like name, price, and description.
3. Express Routes Integration
CRUD Operations with Mongoose:

GET: Fetches all users or products from the database.
POST: Creates a new user or product and saves it to the database.
PUT: Updates an existing user or product based on the provided ID.
DELETE: Removes a user or product from the database based on the provided ID.
Error Handling:

Implements error handling for database operations.
Handles scenarios like duplicate entries, missing fields, and non-existent resources.
4. Middleware
JSON Parsing Middleware:

app.use(express.json()) allows Express to automatically parse incoming JSON requests.
404 and Error Handling Middleware:

Catches and responds to undefined routes with a 404 status.
Handles other server errors with a 500 status.
🛠 Step 7: Testing Your API with MongoDB Integration
Using Postman:
Start Your Server:

```bash
node index.js
Add a New User (POST /users):

URL: http://localhost:3000/users
Method: POST
Body: JSON
```
```json
{
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
}
```
Expected Response:
```json
{
    "message": "User added",
    "user": {
        "_id": "60d5f9f4f8d2e45a3c8b4567",
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "createdAt": "2023-04-25T10:00:00.000Z",
        "updatedAt": "2023-04-25T10:00:00.000Z",
        "__v": 0
    }
}
Get All Users (GET /users):

URL: http://localhost:3000/users
Method: GET
Expected Response:
json
[
    {
        "_id": "60d5f9f4f8d2e45a3c8b4567",
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "createdAt": "2023-04-25T10:00:00.000Z",
        "updatedAt": "2023-04-25T10:00:00.000Z",
        "__v": 0
    }
]
```
Update a User (PUT /users/:id):

URL: http://localhost:3000/users/60d5f9f4f8d2e45a3c8b4567
Method: PUT
Body: JSON
```json
{
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
}
```
Expected Response:
```json
{
    "message": "User updated",
    "user": {
        "_id": "60d5f9f4f8d2e45a3c8b4567",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "createdAt": "2023-04-25T10:00:00.000Z",
        "updatedAt": "2023-04-25T10:05:00.000Z",
        "__v": 0
    }
}
```
Delete a User (DELETE /users/:id):

URL: http://localhost:3000/users/60d5f9f4f8d2e45a3c8b4567
Method: DELETE
Expected Response:
```json
{
    "message": "User deleted",
    "user": {
        "_id": "60d5f9f4f8d2e45a3c8b4567",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "createdAt": "2023-04-25T10:00:00.000Z",
        "updatedAt": "2023-04-25T10:05:00.000Z",
        "__v": 0
    }
}
```


