const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: 'public/images', // Specify the folder where images will be saved
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
