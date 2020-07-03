// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Line below causes the file to pull from Employee.js
// See 10-OOP activities 20 and 21 for examples of subclasses.
const Employee = require("./Employee.js")

// Intern Class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }
// Above constructor details derived from test.

    //Getters/Setters
    getSchool(){return this.school;}
}

module.exports = Intern;