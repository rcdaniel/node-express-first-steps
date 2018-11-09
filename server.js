const express = require('express');
const app = express();

const userdata = [{name: 'Pepe', id: 0}, {name: 'Juan', id: 1}];

app.get('/users', (req, res) => {
    res.json(userdata);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const user = userdata.find(user => user.id === parseInt(userId));
    res.json(user);
});

app.listen(3000, () => console.log('Ready on port 3000!'));