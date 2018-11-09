const express = require('express');
const app = express();

const userdata = [{name: 'Pepe'}, {name: 'Juan'}];

app.get('/', (req,res) => {
    console.log("Request data: ", req);
    res.json(userdata);
});

app.listen(3000, () => console.log('Ready on port 3000!'));