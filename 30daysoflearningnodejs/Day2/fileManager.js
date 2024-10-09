const fs = require("fs");

//for reading file asnychrously

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File content:", data);
});

//for writing file

fs.writeFile("newExample.txt", "This is a ne file", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File is written");
});

// to append files

fs.appendFile("nowExample.txt", "\nThis  is another file", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data appended successfully!");
});
//delete  files

fs.unlink("delete.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully!");
});
