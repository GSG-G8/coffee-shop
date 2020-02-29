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
  ('coffee', 
  'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  , 'choose your favorite coffee and enjoy it fresh', 8);
INSERT INTO menu
  (menuName, menuImage,menuDescription,price)
VALUES
  ('tea', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-CiGivRHj_ao7OZjU1FcvRYBRwnEkQtv04vN-zz3FzWnwzvVG', 'choose your favorite tea and enjoy it fresh', 5);

INSERT INTO menu
  (menuName, menuImage,menuDescription,price)
VALUES
  ('Caffè Latte', 'https://globalassets.starbucks.com/assets/f6c298b781144d9d9042bc05f659dc70.jpg', ' dark, rich espresso is balanced with steamed milk and topped with a light layer of foam', 10);

INSERT INTO menu
  (menuName, menuImage,menuDescription,price)
VALUES
  ('Caffè Mocha', 'https://globalassets.starbucks.com/assets/903b434ac0914483932d006e02baeaa3.jpg', ' Espresso combined with mocha syrup and steamed milk, topped with whipped cream.', 10);

INSERT INTO menu
  (menuName, menuImage,menuDescription,price)
VALUES
  ('Cappuccino', 'https://globalassets.starbucks.com/assets/3f3c928b6db142999b4a8f2b0671afb0.jpg', 'Dark, rich espresso combined with steamed milk, topped with a deep layer of foam.', 10);

INSERT INTO menu
  (menuName, menuImage,menuDescription,price)
VALUES
  ('Caffè Americano', 'https://globalassets.starbucks.com/assets/02e313dd98204b7380730e96f8d50c38.jpg', 'Espresso shots are topped with hot water to produce a light layer of crema in true European style.', 6);

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
