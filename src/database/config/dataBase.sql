BEGIN;

DROP TABLE IF EXISTS orders,users, user_order cascade;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  orderName VARCHAR(100) NOT NULL,
  orderImage VARCHAR(250),
  orderDescription TEXT NOT NULL,
  price INTEGER
);

INSERT INTO orders (orderName, orderImage,orderDescription,price) VALUES ('coffee', '', 'choose your favorite coffee and enjoy it fresh',8);
INSERT INTO orders (orderName, orderImage,orderDescription,price) VALUES ('tea', '','choose your favorite tea and enjoy it fresh',5);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  userName VARCHAR(100) NOT NULL
);

 INSERT into users(userName) VALUES ('soha');
 INSERT into users(userName) VALUES ('ahmed');
 INSERT into users(userName) VALUES ('salma');


CREATE TABLE user_order (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id  int references users(id),
  orders_id  int references orders(id),
  quantity INTEGER,
  size VARCHAR(100),
  suger VARCHAR(100),
  time_of_order TIMESTAMP , 
  total_price INTEGER
);
INSERT INTO user_order (users_id, orders_id,quantity,size,suger,time_of_order,total_price) VALUES (1, 1,3,'small','one',null,24);
INSERT INTO user_order (users_id, orders_id,quantity,size,suger,time_of_order,total_price) VALUES (1, 2,2,'small','one',null,10);

COMMIT;
