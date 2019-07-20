CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
item_id INT(10) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NOT NULL,
price INT(10) NOT NULL,
stock_quantity INT (10) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("basketball", "sporting goods", 15, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DoveBodyWash", "sporting goods", 3, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Window Fan", "home goods", 20, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stapler", "Office Supplies", 8, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Games", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Doritos", "Snacks", 4, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Deer Park Water", "Beverages", 3, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cargo Shorts", "Clothing", 18.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AA-Batteries", "Electronics", 4, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wireless Headphone", "Electronics", 25, 30);




