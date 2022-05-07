class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this. email = email;
        this.role = 'Employee';
    }

    getName = function(){
        return this.name;

    }

    getEmail = function(){
        return this.email;
    }

    getId = function() {
        return this.id;
    }

    getRole = function(){
        return this.role;
    }
    
}

new Employee('mary', 1, 'mary@gmail.com')

 module.exports = Employee;