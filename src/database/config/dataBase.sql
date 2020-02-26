BEGIN;

DROP TABLE IF EXISTS menu, users, order cascade;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  image VARCHAR(250),
  description TEXT NOT NULL,
  price INTEGER
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
);
CREATE TABLE user-order (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id FOREIGN KEY(users.id),
  orders_id FOREIGN KEY(orders.id),
  quantity INTEGER,
  size VARCHAR(100),
  suger VARCHAR(100),
  time_of_order TIMESTAMP , 
  total-price INTEGER,
);

COMMIT;
