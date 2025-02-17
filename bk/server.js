
const express = require('express');
const app = express();

app.post('/notes', (req, res) => {
    res.send('Login successful');
});
app.listen(5000, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.