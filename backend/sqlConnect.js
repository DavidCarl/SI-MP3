const mysql = require('mysql');

let con = mysql.createConnection({
    host: "alfen.me",
    user: "root",
    password: "some_password",
    database: "rentalFleet"
  });


con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});

async function query(sql){
  let promise = new Promise(function(resolve, reject){
    con.query(sql, function(err,rows,fields) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  })
  return await promise;
}

exports.getBrands = async function getBrands(){
  return await query("SELECT * FROM car_brands;");
}

exports.getCars = async function getCars(carBrand){
  
  return await query("SELECT cm.id, cm.model_name FROM car_models cm JOIN car_brands cb WHERE cb.brand_name = \"" + carBrand + "\" AND cb.id = cm.car_brand AND rented = FALSE;")
  }

exports.rentCar = async function rentCar(carId){
  return await query("UPDATE car_models cm SET cm.rented = TRUE WHERE cm.id = " + carId + ";")
}