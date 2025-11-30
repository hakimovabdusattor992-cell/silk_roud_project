const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
 res.send('Hello from Express!');
});

// Start server
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});
