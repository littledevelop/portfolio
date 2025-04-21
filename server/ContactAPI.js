const express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const router = express.Router();

// POST route to handle contact form submission
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const contactData = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  // Save contact to a JSON file
  const filePath = path.join(__dirname, 'contact-forms.json');
  let data = [];

  if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath);
    data = JSON.parse(existingData);
  }

  data.push(contactData);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // Send email notification using Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // from .env
      pass: process.env.EMAIL_PASS,  // from .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // You will receive the message
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending error:', error);
      return res.status(500).json({ error: 'Email sending failed' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Message sent successfully' });
    }
  });
});

module.exports = router;
