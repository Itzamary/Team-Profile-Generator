const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    getGitHub = function(){
        return this.github;
    }

    getRole = function(){
        return this.role;
    }

}

module.exports = Engineer;