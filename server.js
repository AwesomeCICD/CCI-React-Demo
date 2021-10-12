const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/home', (req, res) => {
    res.send({express: "Connected"})
})