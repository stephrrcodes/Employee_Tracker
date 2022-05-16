-- department array 
INSERT INTO department (dept_name)
VALUES ("HR"), ("Sales"), ("Legal"), ("Finance"), ("Engineering")

-- role array
INSERT INTO role (title, salary, department_id)
VALUES ("Director", 90000, 1), ("Lead Engineer", 80000, 2), ("Salesperson", 60000, 3), ("Lawyer",100000, 4), ("Manager", 70000, 5),

-- employee array
INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES ("Homer", "Simpson", 1, 3), ("Ned", "Flanders", 2, null ), ("Waylon", "Smithers", 3, 5), ("Edna", "Krabappel", 4, null), ("Monty", "Burns",5, null),("Marge", "Simpson", 6, null),