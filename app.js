const express = require('express');
const app = express();
// const fs = require("fs");
// const path = require("path");

const app = express();

// Set up a simple route 
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>CI/CD Demo 1</title>
            </head>
            <body>
                <h1>Hello, How are you?</h1>
                <h1>CI/CD Demo using elastic beanstalk</h1>
                <p>This is node js application - test v3</p>
            </body>
        </html>
    `);
});

app.get('/home', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>CI/CD Demo 1</title>
            </head>
            <body>
                <h1>Home Page</h1>
                
            </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
