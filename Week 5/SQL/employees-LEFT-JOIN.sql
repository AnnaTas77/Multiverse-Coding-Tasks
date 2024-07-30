-- SQLite
SELECT employees.first_name, employees.last_name, departments.name
FROM employees
LEFT JOIN departments
ON employees.department_id = departments.id
WHERE departments.name IS NOT NULL;