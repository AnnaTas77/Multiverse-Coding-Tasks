-- SQLite

.mode column
.headers on

-- RESTAURANTS
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY,
    name TEXT,
    imagelink TEXT
);
insert into restaurants(name, imagelink) 
values 
  ("hells kitchen", "https://www.imdb.com/title/tt0437005/"),
  ("wagamamas", "https://www.imdb.com/title/aaa"),
  ("ruby ricks", "https://www.imdb.com/title/aaa")
;

-- MENUS
CREATE TABLE menus (
    id INTEGER PRIMARY KEY, 
    title TEXT,
    restaurant_id INTEGER REFERENCES restaurants(id)
);
insert into menus(title, restaurant_id)
values
  ("Wines", 1),
  ("A la carte", 1),
  ("Evening", 2),
  ("Breakfast", 2)
;

-- MENU ITEMS
CREATE TABLE menuItems (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER,
    menu_id INTEGER REFERENCES menus(id)
);
insert into menuItems(name,price,menu_id)
values
  ("Salmon", 25.99, 3),
  ("Sushi", 10.99, 2),
  ("Spring roll", 6.99, 2),
  ("Cabernet Sauvignon", 49.99, 1),
  ("Merlot", 39.99, 1)
; 
-- DO NOT EDIT CODE ABOVE

-- Task 1

SELECT restaurants.name, menus.title
FROM restaurants
INNER JOIN menus
ON menus.restaurant_id = restaurants.id;

-- Task 2

SELECT * FROM restaurants;
SELECT * FROM menus;
SELECT * FROM menuItems;

SELECT restaurants.name, menus.title, menuItems.name
FROM restaurants
INNER JOIN menus
ON restaurants.id = menus.restaurant_id
JOIN menuItems
ON menus.id = menuItems.id;

-- Task 3 ------------------------------------------------------------------

.mode column
.headers on

DROP TABLE restaurants;
DROP TABLE menus;
DROP TABLE menuItems;

-- RESTAURANTS
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY,
    name TEXT,
    imagelink TEXT
);
insert into restaurants(name, imagelink) 
values 
  ("hells kitchen", "https://www.imdb.com/title/tt0437005/"),
  ("wagamamas", "https://www.imdb.com/title/aaa"),
  ("ruby ricks", "https://www.imdb.com/title/aaa")
;

-- MENUS
CREATE TABLE menus (
    id INTEGER PRIMARY KEY, 
    title TEXT,
    restaurant_id INTEGER REFERENCES restaurants(id)
);
insert into menus(title, restaurant_id)
values
  ("Wines", 1),
  ("A la carte", 1),
  ("Evening", 2),
  ("Breakfast", 2)
;

-- MENU ITEMS
CREATE TABLE menuItems (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER,
    menu_id INTEGER REFERENCES menus(id)
);
insert into menuItems(name,price,menu_id)
values
  ("Salmon", 25.99, 3),
  ("Sushi", 10.99, 2),
  ("Spring roll", 6.99, 2),
  ("Cabernet Sauvignon", 49.99, 1),
  ("Merlot", 39.99, 1)
; 
-- DO NOT EDIT CODE ABOVE


SELECT * FROM restaurants;
SELECT * FROM menus;
SELECT * FROM menuItems;

SELECT restaurants.name, menus.title, menuItems.name
FROM restaurants
FULL OUTER JOIN menus
ON restaurants.id = menus.restaurant_id
FULL OUTER JOIN menuItems
ON menus.id = menuItems.menu_id;


-- Task 4 ------------------------------------------------------------------


DROP TABLE restaurants;
DROP TABLE menus;
DROP TABLE menuItems;

-- RESTAURANTS
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY,
    name TEXT,
    imagelink TEXT
);
insert into restaurants(name, imagelink) 
values 
  ("hells kitchen", "https://www.imdb.com/title/tt0437005/"),
  ("wagamamas", "https://www.imdb.com/title/aaa"),
  ("ruby ricks", "https://www.imdb.com/title/aaa")
;

-- MENUS
CREATE TABLE menus (
    id INTEGER PRIMARY KEY, 
    title TEXT,
    restaurant_id INTEGER REFERENCES restaurants(id)
);
insert into menus(title, restaurant_id)
values
  ("Wines", 1),
  ("A la carte", 1),
  ("Evening", 2),
  ("Breakfast", 2)
;

-- MENU ITEMS
CREATE TABLE menuItems (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER,
    menu_id INTEGER REFERENCES menus(id)
);
insert into menuItems(name,price,menu_id)
values
  ("Salmon", 25.99, 3),
  ("Sushi", 10.99, 2),
  ("Spring roll", 6.99, 2),
  ("Cabernet Sauvignon", 49.99, 1),
  ("Merlot", 39.99, 1)
; 
-- DO NOT EDIT CODE ABOVE

SELECT * FROM restaurants;
SELECT * FROM menus;
SELECT * FROM menuItems;

SELECT menus.title, menuItems.name, menuItems.price
FROM menus
INNER JOIN menuItems
ON menus.id = menuItems.menu_id
WHERE menus.title = 'Wines';


-- Task 5 ------------------------------------------------------------------

DROP TABLE restaurants;
DROP TABLE menus;
DROP TABLE menuItems;

-- RESTAURANTS
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY,
    name TEXT,
    imagelink TEXT
);
insert into restaurants(name, imagelink) 
values 
  ("hells kitchen", "https://www.imdb.com/title/tt0437005/"),
  ("wagamamas", "https://www.imdb.com/title/aaa"),
  ("ruby ricks", "https://www.imdb.com/title/aaa")
;

-- MENUS
CREATE TABLE menus (
    id INTEGER PRIMARY KEY, 
    title TEXT,
    restaurant_id INTEGER REFERENCES restaurants(id)
);
insert into menus(title, restaurant_id)
values
  ("Wines", 1),
  ("A la carte", 1),
  ("Evening", 2),
  ("Breakfast", 2)
;

-- MENU ITEMS
CREATE TABLE menuItems (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER,
    menu_id INTEGER REFERENCES menus(id)
);
insert into menuItems(name,price,menu_id)
values
  ("Salmon", 25.99, 3),
  ("Sushi", 10.99, 2),
  ("Spring roll", 6.99, 2),
  ("Cabernet Sauvignon", 49.99, 1),
  ("Merlot", 39.99, 1)
; 
-- DO NOT EDIT CODE ABOVE

SELECT * FROM restaurants;
SELECT * FROM menus;
SELECT * FROM menuItems;

SELECT menus.title, menuItems.name, menuItems.price
FROM menus
INNER JOIN menuItems
ON menus.id = menuItems.menu_id
WHERE menuItems.price < 30;

