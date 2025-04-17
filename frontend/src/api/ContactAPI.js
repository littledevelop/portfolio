// api/contact.js
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Path to store the contact form data (you may use environment variables for security)
    const filePath = path.resolve('./data/contact-forms.json');

    // Load existing contact data
    let data = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      data = JSON.parse(fileData);
    }

    // Add new form submission
    data.push({ name, email, message });

    // Write updated data to JSON file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // Send success response
    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
