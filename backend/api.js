const con = require('./sqlConnect')

const feedback = (req, res) => {
    const response = req.body
    if(response.hasOwnProperty('grading')){
        if(isNaN(response['grading'])){
            // Not a number!
            res.status(400).send({"error":"Grading is not a number!"})
        }
    }else{
        res.status(400).send({"error":"Missing grading parameter!"})
    }
    res.status(200).send({"success":"Thank you for feedback"})
}

exports.getCars = async function getCars (req, res) {
    let cars = await con.getCars(req.params.brand)
    console.log(cars)
    res.status(200).send(cars)
}


exports.rentCar = async function rentCar (req, res) {
    let car = await con.rentCar(req.params.carId)
    console.log(car)
    res.status(200).send(car)
}

exports.feedback = feedback;


exports.getBrands = async function getBrands(req, res){
    // let brands = null
    let brands = await con.getBrands()
    console.log(brands)
    // let brands = await con.getBrands()
    // console.log(brands.results)
    res.status(200).send(brands)
}

// con.test("bmw")

// con.getBrands()[0].brand_name
// result = con.getBrands()
// console.log(result)