DROP DATABASE IF EXISTS rentalFleet;
CREATE DATABASE rentalFleet;
USE rentalFleet;

CREATE TABLE car_brands (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    brand_name VARCHAR(255) NOT NULL
);

CREATE TABLE car_models (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    car_brand INT NOT NULL,
    model_name VARCHAR(255) NOT NULL,
    rented BOOLEAN NOT NULL,
    FOREIGN KEY(car_brand) REFERENCES car_brands(id)
);

CREATE TABLE feedback (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    grading INT NOT NULL,
    review VARCHAR(10000) NOT NULL
);

INSERT INTO car_brands(brand_name) VALUES ("Audi");
INSERT INTO car_brands(brand_name) VALUES ("BMW");
INSERT INTO car_brands(brand_name) VALUES ("Mercedes");

INSERT INTO car_models(car_brand, model_name, rented) VALUES (1, "SQ8", FALSE);
INSERT INTO car_models(car_brand, model_name, rented) VALUES (1, "R8", FALSE);
INSERT INTO car_models(car_brand, model_name, rented) VALUES (1, "RS6", FALSE);
INSERT INTO car_models(car_brand, model_name, rented) VALUES (1, "A4", FALSE);
INSERT INTO car_models(car_brand, model_name, rented) VALUES (1, "A6", FALSE);

INSERT INTO car_models(car_brand, model_name, rented) VALUES (2, "i8", FALSE);
INSERT INTO car_models(car_brand, model_name, rented) VALUES (2, "Z4", FALSE);
INSERT INTO car_models(car_brand, model_name, rented) VALUES (2, "F44", FALSE);

INSERT INTO car_models(car_brand, model_name, rented) VALUES (3, "C63 AMG", FALSE);
INSERT INTO car_models(car_brand, model_name, rented) VALUES (3, "560", FALSE);

INSERT INTO feedback(grading, review) VALUES (1, "it sucks!");
INSERT INTO feedback(grading, review) VALUES (7, "it good!");
INSERT INTO feedback(grading, review) VALUES (4, "Just below avg!");
INSERT INTO feedback(grading, review) VALUES (6, "Just above avg!");