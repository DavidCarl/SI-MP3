const express = require('express')
const cors = require('cors')
const api = require('./api')
const app = express()
const port = 3001

const corsOpt = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOpt));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/v1/carlist', (req, res) => res.send({"car":"cyka"}));

app.get('/v1/cars/:brand', async (req, res) => api.getCars(req, res))
app.get('/v1/brands', async (req, res) => api.getBrands(req, res))

app.get('/v1/rent/:carId', async (req, res) => api.rentCar(req, res))

app.post('/v1/feedbacksurvey', (req, res) => api.feedback(req, res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



