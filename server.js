const express = require('express');
const fs = require("fs");
const app = express();

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
})

app.listen(3000);