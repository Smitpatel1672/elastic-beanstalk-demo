const express = require('express');
const app = express();

// Set up a simple route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello, How are you?</h1>
            </body>
        </html>
    `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
