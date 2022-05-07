const Manager = require('../lib/Manager');
const Engineers = require('../lib/Engineer');
const Intern = require('../lib/Intern');

let totalEmployeeInfo = {
    managers: [],
    engineers: [],
    interns: []
}

const generateEmployees = (empoyeeInfo) => {
    // console.log(empoyeeInfo);

    if (empoyeeInfo.manager){
        empoyeeInfo.manager.forEach(man =>{
            const Managers = new Manager(man.managersName, man.managerId, man.managerEmail, man.managerOfficeNum);

            totalEmployeeInfo.managers.push(Managers);
        })
    }
    

    if (empoyeeInfo.engineer) {
        empoyeeInfo.engineer.forEach(eng => {
            const Engineer = new Engineers(eng.engineerName, eng.engineerId, eng.engEmail, eng.ghUsername);

            totalEmployeeInfo.engineers.push(Engineer);
        })
    }


    if (empoyeeInfo.intern){
        empoyeeInfo.intern.forEach(int => {
            const intern = new Intern(int.internName, int.internId, int.intEmail, int.intSchool);

            totalEmployeeInfo.interns.push(intern);
        })
        
    }

    // this returns information
    console.log('TTLEMPLINF', totalEmployeeInfo);

    return totalEmployeeInfo;
}
//returns empty arr in the obj
// console.log('TTLEMPLINF', totalEmployeeInfo);



module.exports = generateEmployees;
