const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const dbConfig = require('./config/database.config.js');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({
        "status": 200,
        "data": {
            "message": "Hello crud Node Express"
        }
    })
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});