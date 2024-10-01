const express = require('express');
const multer = require('multer'); // To handle file uploads
const User = require('./models/User');
const sequelize = require('./db');
const app = express();

// Multer setup to handle file uploads
const upload = multer();

app.post('/api/register', upload.single('document'), async (req, res) => {
  try {
    const { name, phone, email, adharcard, pan } = req.body;
    const document = req.file.buffer; // Access the uploaded file's data
     // Check if file and data are correctly received
     console.log('Received data:', { name, phone, email, adharcard, pan });
     console.log('Received file:', req.file);

    // Insert into the database
    const newUser = await User.create({
      name,
      phone,
      email,
      adharcard,
      pan,
      document,
    });

    res.status(201).send({ message: 'Registration successful', newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ message: 'Registration failed', error });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3001');
});
