// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Line below causes the file to pull from Employess.js
const Employee = require("./Employee.js")

// Intern Class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }

    //Getters/Setters
    getSchool(){return this.school;}
}

module.exports = Intern;