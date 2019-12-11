SELECT * FROM car_models cm JOIN car_brands cb WHERE cb.brand_name = "bmw" AND cb.id = cm.car_brand;

UPDATE car_models cm SET cm.rented = TRUE WHERE cm.id = 7;

SELECT * FROM feedback f WHERE f.grading <= 4; # 4 and below
SELECT * FROM feedback f WHERE f.grading >= 5; # 5 and up