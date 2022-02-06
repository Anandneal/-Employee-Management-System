

INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Marketing"),
    ("Finance"),
    ("Legal"),
    ("Engineering");

INSERT INTO empRole
    (title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Marketing Lead", 120000, 2),
    ("Finance Lead", 160000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4),
    ("Lead Developer", 200000, 5),
    ("Junior Developer", 90000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Natasha", "Romanoff", 1, null),
    ("Clint", "Barton", 2, null),
    ("Steven", "Rogers", 3, null),
    ("Jennifer", "Walters", 4, null),
    ("Matthew", "Murdock", 5, 4),
    ("Anthony", "Stark", 6, null),
    ("Peter", "Parker", 7, 6); 