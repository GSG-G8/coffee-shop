BEGIN;

DROP TABLE IF EXISTS orders,menu cascade;

CREATE TABLE menu (
  id SERIAL PRIMARY KEY NOT NULL,
  menuName VARCHAR(100) NOT NULL,
  menuImage VARCHAR(250),
  menuDescription TEXT NOT NULL,
  price INTEGER
);

INSERT INTO menu (menuName, menuImage,menuDescription,price) VALUES ('coffee', '', 'choose your favorite coffee and enjoy it fresh',8);
INSERT INTO menu (menuName, menuImage,menuDescription,price) VALUES ('tea', '','choose your favorite tea and enjoy it fresh',5);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  menuId INTEGER references menu(id) NOT NULL,
  quantity INTEGER,
  size VARCHAR(100),
  suger VARCHAR(100),
  time_of_order TIMESTAMP , 
  total_price INTEGER
);
INSERT INTO orders (menuId,quantity,size,suger,time_of_order,total_price) VALUES (1,3,'small','one','null',24);
INSERT INTO orders (menuId,quantity,size,suger,time_of_order,total_price) VALUES (2,2,'small','one','null',10);

COMMIT;
