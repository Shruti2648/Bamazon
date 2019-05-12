CREATE DATABASE IF NOT EXISTS bamazon_db;
USE bamazon_db;

-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT,
    product_name VARCHAR(250),
    department_name VARCHAR(250),
    price FLOAT,
    stock_quantity FLOAT,
    primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Elf Hydrating Primer", "Cosmetics", 12.50, 40),
	   ("Elf Tone Adjusting Primer", "Cosmetics", 13.50, 30),
	   ("Elf Illuminating Eye Cream", "Cosmetics", 10.80, 30),
       ("Elf Nourishing Night Cream", "Cosmetics", 13.00, 27),
       ("Elf Antioxidant Booster Drops", "Cosmetics", 10.80, 15),
       ("Pantene Intense Rescue Shots", "Haircare", 15.00, 35),
       ("Pantene Pro-V Daily Moisture Shampoo", "Haircare", 12.75, 24),
       ("Pantene Pro-V Daily Moisture Conditioner", "Haircare", 13.75, 32),
       ("Pantene Thermal Heat Protect Spray", "Haircare", 15.25, 40),
       ("Pantene Volume Texturizing Hairspray", "Haircare", 12.75, 32);
       
SELECT * FROM products;


