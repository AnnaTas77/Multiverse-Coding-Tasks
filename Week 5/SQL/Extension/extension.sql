-- SQLite

-- SELECT BY ID -- TASK 1

CREATE TABLE IF NOT EXISTS companies(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    location TEXT,
    numEmployees INTEGER
);

INSERT INTO companies (name, location, numEmployees)
VALUES
    ('Acme Inc', 'New York', 15),
    ('The Better Company', 'Washington DC', 50),
    ('Bowls-R-Us', 'Copper Hills', 60),
    ('Speed Cyclery', 'Washington DC', 147),
    ('Sparkles-A-Million', 'New York', 25)
;
-- DO NOT EDIT CODE ABOVE

SELECT * FROM companies;

SELECT * FROM companies
WHERE id=3;


-- Select Filter Company -- Task 2

DROP TABLE companies;
CREATE TABLE IF NOT EXISTS companies(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    location TEXT,
    numEmployees INTEGER
);

INSERT INTO companies (name, location, numEmployees)
VALUES
    ('Acme Inc', 'New York', 15),
    ('The Better Company', 'Washington DC', 50),
    ('Bowls-R-Us', 'Copper Hills', 60),
    ('Speed Cyclery', 'Washington DC', 147),
    ('Sparkles-A-Million', 'New York', 25)
;

SELECT * FROM companies;

SELECT * FROM companies
WHERE location = 'New York';


-- Order Employee Names -- Task 3


CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY, 
    name TEXT, 
    email TEXT
);

INSERT INTO employees (name, email)
VALUES
    ('Annie Position', 'annie@email.com'),
    ('Bea O-Problem', 'bea@email.com'),
    ('Bud Lightyear', 'dabuzz@email.com'),
    ('Airis Windy', 'weather@email.com'),
    ('Barbie Breath', 'barb@email.com'),
    ('Reese WitherFork', 'reesey@email.com')
;
-- DO NOT EDIT CODE ABOVE

SELECT * FROM employees;

SELECT * FROM employees
ORDER BY name ASC;