// frontend/pages/api/contact.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Log or process data
      console.log('Form Data:', name, email, message);
  
      return res.status(200).json({ message: 'Form submitted successfully' });
    }
  
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
  