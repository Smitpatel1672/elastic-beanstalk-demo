const express = require('express');
const app = express();

// Set up a simple route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>CI/CD Demo</title>
            </head>
            <body>
                <h1>Hello, How are you?</h1>
                <h1>CI/CD Demo using elastic beanstalk</h1>
                <p>This is node js application - test v3</p>
            </body>
        </html>
    `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
