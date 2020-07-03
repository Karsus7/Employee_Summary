// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Line below causes the file to pull from Employess.js
// See 10-OOP activities 20 and 21 for examples of subclasses.
const Employee = require("./Employee.js");

// Manager Class
class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = office;
    }
// Above constructor details derived from test.

    //Getters/Setters
    getOfficeNumber(){return this.officeNumber}
}

//export so this class can be inclulded in other files
module.exports = Manager;