-- SQLite
CREATE TABLE IF NOT EXISTS departments(
    id INTEGER PRIMARY KEY, 
    name TEXT
);

INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Marketing'),
    ('Engineering'),
    ('Finanace')
;