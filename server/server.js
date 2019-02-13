const express = require('express');

const app = express();


// Allow for cross origins
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});






// Set the main route
app.get('/', (req, res) => {
    
    res.send('Hello Greg');
    console.log('check');
});

app.listen(8888);