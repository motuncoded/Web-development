const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

postSchema.pre("save", function (next) {
  console.log("Post is being saved:", this.title);
  next();
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// Usage Example
const newUser = new User({ firstName: "Jane", lastName: "Doe" });
newUser
  .save()
  .then((user) => {
    const newPost = new Post({ title: "My first post", author: user._id });
    return newPost.save();
  })
  .then(() => {
    return Post.find().populate("author");
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((err) => console.error(err));
