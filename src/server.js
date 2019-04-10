const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Aloha");
});

app.listen(3232);