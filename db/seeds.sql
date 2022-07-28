INSERT INTO department (name)
VALUES 
    ("Management"),
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("CEO", 1000000, 1),
    ("CTO", 900000, 1),
    ("Sales Lead", 100000, 2),
    ("Salesperson", 80000, 2),
    ("Lead Engineer", 150000, 3),
    ("Software Engineer", 120000, 3),
    ("Account Manager", 160000, 4),
    ("Accountant", 125000, 4),
    ("Legal Team Lead", 250000, 5),
    ("Lawyer", 190000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Phillip", "Price", 1, null),
    ("Scott", "Knowles", 2, 1),
    ("Fernando", "Vera", 3, null),
    ("Shayla", "Nico", 4, 3),
    ("Elliot", "Alderson", 5, null),
    ("Darlene", "Alderson", 6, 5),
    ("Tyrell", "Wellick", 7, null),
    ("Krista", "Gordon", 8, 7),
    ("Susan", "Jacobs", 9, null),
    ("Ollie", "Parker", 10, 9);
