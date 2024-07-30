-- SQLite
DROP TABLE companies;
CREATE TABLE IF NOT EXISTS companies(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    location TEXT,
    numEmployees INTEGER
);
-- DO NOT EDIT CODE ABOVE

-- YOUR CODE HERE

-- TASK 1

INSERT INTO companies(name, location, numEmployees)
VALUES('Acme Inc', 'Nowhere', 5),
('The Better Company', 'Washington DC', 50);

-- TASK 2

UPDATE companies
SET location = 'New York'
WHERE id=1;

-- TASK 3
DELETE from companies
WHERE id=1;


-- Task 4
SELECT * FROM companies;

-- Task 5

INSERT INTO companies (name, location, numEmployees)
VALUES
    ('Acme Inc', 'New York', 15),
    ('The Better Company', 'Washington DC', 50),
    ('Bowls-R-Us', 'Copper Hills', 60),
    ('Speed Cyclery', 'Washington DC', 147),
    ('Sparkles-A-Million', 'New York', 25)
;

SELECT * FROM companies;

-- Task 6

SELECT name, numEmployees from companies
WHERE numEmployees > 40;


-- Task 7 ----------------------------------------------

DROP TABLE companies;
CREATE TABLE IF NOT EXISTS companies(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    location TEXT
);

CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    email TEXT,
    company_id INTEGER REFERENCES companies(id)
);

INSERT INTO companies (name, location)
VALUES
    ('Acme Inc', 'New York'),
    ('The Better Company', 'Washington DC'),
    ('Bowls-R-Us', 'Copper Hills'),
    ('Speed Cyclery', 'Washington DC'),
    ('Sparkles-A-Million', 'New York')
;

INSERT INTO employees (name, email, company_id)
VALUES
    ('Annie Position', 'annie@email.com', 2),
    ('Bea O-Problem', 'bea@email.com', 1),
    ('Bud Lightyear', 'dabuzz@email.com', 4),
    ('Airis Windy', 'weather@email.com', 2),
    ('Barbie Breath', 'barb@email.com', 2),
    ('Reese WitherFork', 'reesey@email.com', 1)
;

SELECT companies.name, employees.name, employees.email
FROM companies
INNER JOIN employees
ON employees.company_id = companies.id;


-- Task 8 ----------------------------------------------

DROP TABLE companies;
DROP TABLE employees;
CREATE TABLE IF NOT EXISTS companies(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    location TEXT
);

CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    email TEXT,
    company_id INTEGER REFERENCES companies(id)
);

INSERT INTO companies (name, location)
VALUES
    ('Acme Inc', 'New York'),
    ('The Better Company', 'Washington DC'),
    ('Bowls-R-Us', 'Copper Hills'),
    ('Speed Cyclery', 'Washington DC'),
    ('Sparkles-A-Million', 'New York')
;

INSERT INTO employees (name, email, company_id)
VALUES
    ('Annie Position', 'annie@email.com', 2),
    ('Bea O-Problem', 'bea@email.com', 1),
    ('Bud Lightyear', 'dabuzz@email.com', 4),
    ('Airis Windy', 'weather@email.com', 2),
    ('Barbie Breath', 'barb@email.com', 2),
    ('Reese WitherFork', 'reesey@email.com', 1)
;

SELECT companies.name, employees.name, employees.email
FROM companies
LEFT JOIN employees
ON employees.company_id = companies.id; 