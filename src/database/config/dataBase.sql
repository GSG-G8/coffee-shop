BEGIN;

  DROP TABLE IF EXISTS orders,menu
  cascade;

CREATE TABLE menu
(
  id SERIAL PRIMARY KEY NOT NULL,
  menuName VARCHAR(100) NOT NULL,
  menuImage text,
  menuDescription TEXT NOT NULL,
  price INTEGER
);

INSERT INTO menu
  (menuName, menuImage,menuDescription,price)
VALUES
  ('coffee', 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'choose your favorite coffee and enjoy it fresh', 8);
INSERT INTO menu
  (menuName, menuImage,menuDescription,price)
VALUES
  ('tea', 'https://img.etimg.com/thumb/msid-73548905,width-640,resizemode-4,imgsize-671235/mathematical-formula-for-perfect-cup-of-coffee.jpg', 'choose your favorite tea and enjoy it fresh', 5);


CREATE TABLE orders
(
  id SERIAL PRIMARY KEY NOT NULL,
  menuId INTEGER references menu(id) NOT NULL,
  quantity INTEGER,
  size VARCHAR(100),
  suger VARCHAR(100),
  total_price INTEGER
);
INSERT INTO orders
  (menuId,quantity,size,suger,total_price)
VALUES
  (1, 3, 'small', 'one',24);
INSERT INTO orders
  (menuId,quantity,size,suger,total_price)
VALUES
  (2, 2, 'small', 'one', 10);

COMMIT;
