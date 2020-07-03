// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Line below causes the file to pull from Employess.js
// See 10-OOP activities 20 and 21 for examples of subclasses.
const Employee = require("./Employee.js");

// Engineer Class
class Engineer extends Employee{
    constructor(name, id, email, gitName){
        super(name, id, email);
        this.role = "Engineer";
        this.github = gitName;
    }
// Above constructor details derived from test.

    //Getters/Setters
    getGithub(){return this.github;}

}

module.exports = Engineer;