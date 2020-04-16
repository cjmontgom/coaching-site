const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// extra check to redirect the users back to index.html to avoid ‘not found’ errors and for the sake of simplicity
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);