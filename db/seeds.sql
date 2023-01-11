INSERT INTO department(department_name)
VALUES ("R&D"), 
       ("Sales"),
       ("Customer Service");

INSERT INTO role(title_name,salary,department_id)
VALUES ("Jr. Engineer ",30000,1),
       ("Sales Representative", 50000,2),
       ("Customer Representative", 20000,3),
       ("Senior Engineer", 50000,1),
       ("Finance Specialist", 45000,2),
       ("Complaint Specialist",70000,3);
INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("Dom","Teran",6,2),
       ("Jon","cam",2,1),
       ("Vinh", "Nguyen",1,4),
       ("Bella", "Nhi",4,3)
    
