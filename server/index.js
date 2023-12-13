const path = require("path");
const express = require("express");
const app = express(); 

// app.use(express.static(path.join(__dirname, "..", "build")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

app.use((req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});