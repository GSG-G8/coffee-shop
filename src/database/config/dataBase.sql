BEGIN;

DROP TABLE IF EXISTS orders,users, user_order cascade;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  orderName VARCHAR(100) NOT NULL,
  orderImage VARCHAR(250),
  orderDescription TEXT NOT NULL,
  price INTEGER
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  userName VARCHAR(100) NOT NULL
);

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

COMMIT;
