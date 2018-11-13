const express = require('express');

const app = express();

app.get('/', (req, res) => {
    
    res.send('Hello Greg');
    console.log('check');
});

app.listen(8000);
console.log('check 888');