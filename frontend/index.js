const express = require('express')
var path = require('path');
var cors = require('cors');

const app = express();
const port = 3000;

const corsOpt = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOpt));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')))
app.get('/rental', (req, res) => res.sendFile(path.join(__dirname + '/views/rental.html')))
app.get('/rental/feedback', (req, res) => res.sendFile(path.join(__dirname + '/views/rental.feedback.html')))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))