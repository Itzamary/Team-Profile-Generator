const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'intern';
    }

    getSchool = function(){
        return this.school;
    }

    getRole = function(){
        return this.role;
    }
}

module.exports = Intern;