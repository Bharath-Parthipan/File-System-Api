const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const folderPath = path.join(__dirname, "files");

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Endpoint to create a text file with the current timestamp
app.post("/create-file", (req, res) => {
  const currentDateTime = new Date();
  const timestamp = currentDateTime.toISOString();
  const filename = `${currentDateTime.toISOString().replace(/[:.]/g, "-")}.txt`;
  const filePath = path.join(folderPath, filename);

  fs.writeFile(filePath, timestamp, (err) => {
    if (err) {
      return res.status(500).send("Error creating file");
    }
    res.send("File created successfully");
  });
});

// Endpoint to retrieve all text files in the folder
app.get("/files", (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).send("Error reading folder");
    }
    const textFiles = files.filter((file) => file.endsWith(".txt"));
    res.json(textFiles);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
