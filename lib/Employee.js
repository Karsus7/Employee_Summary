// TODO: Write code to define and export the Employee class
// Default Employee class to be expanded on by the more specific subclasses.
// See 10-OOP activities 20 and 21 for examples of subclasses.
class Employee{
    constructor(name, id, email ){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
// Above constructor details derived from test.

    // getters/setters
    getName(){return this.name;}
    getId(){return this.id;}
    getEmail(){return this.email;}
    getRole(){return this.role;}
}

module.exports = Employee;