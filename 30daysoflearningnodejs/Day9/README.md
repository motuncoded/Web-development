# 📅 Day 9: Advanced Mongoose Features – Middleware, Virtuals, and Population

Welcome to Day 9 of your Node.js learning journey! Today, you'll delve deeper into Mongoose, exploring its advanced features such as middleware, virtuals, and population. These features will enhance your ability to model complex data relationships, automate tasks, and optimize database queries in your application.

---

## Understanding Mongoose Middleware

### 1. Middleware in Mongoose

Middlewares are functions that are executed at certain stages of the request/response cycle. They can be used for pre-saving, pre-removing, and other events.
It allows you to execute functions during specific stages of a document's lifecycle. There are two types:

Pre Middleware: Executes before a certain event (e.g., before saving a document).
Post Middleware: Executes after a certain event (e.g., after saving a document).

- **PreMiddleware**: Runs before a specified action (like save or remove). Useful for validation or modifying data before it's processed.

```javascript
const schema = new mongoose.Schema({ name: String });

schema.pre("save", function (next) {
  console.log("Before saving");
  next();
});
```

**Post Middleware**: Runs after a specified action. Useful for logging or performing actions after saving/removing.

```javascript
schema.post("save", function (doc) {
  console.log("After saving:", doc);
});
```

### 2. Virtuals

Virtuals are properties that do not get persisted to the database but are computed on the fly.

- **Creating Virtuals**: Define virtuals using the schema.virtual() method.

```javascript
schema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
```

- **Virtuals**: Access them just like a normal property, and they can be included in toJSON or toObject output.

```javascript
const user = new User({ firstName: "John", lastName: "Doe" });
console.log(user.fullName); // 'John Doe'
```

### 3. Population

Population allows you to reference documents in other collections. It makes it easier to work with related data.

Defining References: Use the ref option in your schema definition for fields that reference other collections.

```javascript
const PostSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
```

**Using Populate**: You can populate the referenced documents when querying.

```javascript
Post.find()
  .populate("author")
  .exec((err, posts) => {
    console.log(posts);
  });
```
