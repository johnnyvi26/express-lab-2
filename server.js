const express = require('express');
const app = express();
const port = 3000;


app.get('/greeting', (req,res) => {
    res.send('Hello, stranger.');
});

app.get('/:name/greeting')


app.listen(port, () => {
    console.log('listening on port', port);
});