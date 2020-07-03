// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Line below causes the file to pull from Employess.js
const Employee = require("./Employee.js");

// Engineer Class
class Engineer extends Employee{
    constructor(name, id, email, gitName){
        super(name, id, email);
        this.role = "Engineer";
        this.github = gitName;
    }

    //Getters/Setters
    getGithub(){return this.github;}

}

module.exports = Engineer;