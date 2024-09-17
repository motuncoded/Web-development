# Day 2: Node.js Core Modules and Working with the File System

Welcome to **Day 2** of learning Node.js! Today, you'll dive into the core modules of Node.js and learn how to interact with the file system, which is crucial for building server-side applications.

---

## 📚 **Node.js Core Modules Overview**

Node.js comes with several **core modules** that provide basic functionality needed to build powerful applications without needing to install additional libraries.

### Commonly Used Core Modules:
1. **`fs`** (File System): Allows you to interact with the file system.
2. **`http`**: Helps you create HTTP servers and clients.
3. **`path`**: Useful for handling file paths.
4. **`os`**: Provides information about the operating system.
5. **`events`**: Implements the event-driven programming model.

Today, you'll primarily focus on the **`fs`** (File System) module.

---

## 🛠 **Working with the File System (`fs` Module)**

The `fs` module allows you to interact with files on your system (e.g., reading, writing, deleting, and more). It provides both **synchronous** and **asynchronous** methods, though the asynchronous ones are preferred in Node.js to avoid blocking the event loop.

### 1. **Importing the `fs` Module**
Before you can use the file system, you need to import the `fs` module:
```javascript
const fs = require('fs');
```
### 2. **Reading Files**
You can read files either synchronously or asynchronously:

## Asynchronous Reading
```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```
## Synchronous Reading

```javascript 
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```
 The asynchronous version is non-blocking, meaning it won’t stop the program while the file is being read. It uses a callback function to handle the result.
 The synchronous version will block further execution until the file is read completely.

### 3. Writing to Files
 To write data to a file, use either the asynchronous or synchronous methods:

## Asynchronous Writing
``` javascript
fs.writeFile('output.txt', 'This is the data to write', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully!');
});
```
## Synchronous Writing
```javascript
fs.writeFileSync('output.txt', 'This is the data to write');
console.log('File written successfully!');
```
### 4. Appending to Files
If you want to add data to an existing file without overwriting it, use fs.appendFile or fs.appendFileSync.

## Asynchronous Appending
```javascript
fs.appendFile('output.txt', '\nAdditional data to append', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data appended successfully!');
});
```


## 5. Deleting Files
#### To delete a file, use the fs.unlink function.

## Asynchronous Deletion
```javascript
fs.unlink('output.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File deleted successfully!');
});
```




## 🔍 Core Concepts to Understand
- Asynchronous vs. Synchronous: In Node.js, it's essential to understand the differences between synchronous and asynchronous methods, especially when dealing with file I/O.
- Callbacks: Node.js uses callbacks to handle asynchronous operations. Today’s tasks will give you a practical understanding of how callbacks work.

## 📚 **Learning Resources  for Day 2**

Here are some of the key resources you'll use throughout this journey:

- [Node.js fs Module Documentation](https://nodejs.org/api/fs.html)
- [Asynchronous Programming in Node.js](https://nodejs.org/en/learn/asychronous-work/javascript-asychronous-programming-and-callbacks/)
- [What is the Node.js Event Loop?](https://nodejs.org/en/learn/asychronous-work/event-loop-timers-and-nexttick/)

