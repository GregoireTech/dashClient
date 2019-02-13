const express = require('express');
const query = require('./util/queryBuilder');
const app = express();


// Allow for cross origins
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


const db = require('./util/database');

const request = query(1);

db.execute(request)
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

// Set the main route
app.get('/', (req, res) => {
    
    res.send('Hello Greg');
    console.log('check');
});

app.listen(8888);