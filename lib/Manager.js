const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = 'manager';
    }

    getRole = function () {
        return this.role;
    }
    
}

module.exports = Manager;