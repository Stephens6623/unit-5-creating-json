const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.get('/answers', (req, res) => { 
    res.sendFile(path.join(__dirname,'api','answers.json'));
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});