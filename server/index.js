const express = require('express');
require('dotenv').config();
const cors = require('cors'); // Import CORS


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/hello', (req, res) => {
    res.json({msg: 'Does not appeat that remote updates will work'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});