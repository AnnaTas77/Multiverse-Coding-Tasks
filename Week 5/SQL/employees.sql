-- SQLite
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments; 
CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY, 
    first_name TEXT, 
    last_name TEXT,
    department_id INTEGER,
    salary INTEGER
);


INSERT INTO employees (first_name, last_name, department_id, salary)
VALUES
    ('Ahmed', 'Khan', 1, 50000),
    ('Sakura', 'Tanaka', 2, 65000),
    ('Moussa', 'Diop', 3, 55000),
    ('Jia', 'Li', null, 60000),
    ('Emmanuel', 'Smith', 2, 70000),
    ('Fatima', 'Camara', 3, 75000),
    ('Kofi', 'Boateng', 4, 55000),
    ('Leila', 'Guzman', null, 80000)
;