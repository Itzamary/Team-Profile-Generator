// const { info } = require('console');
 const fs = require('fs');

const generateEmployees = require('./src/generate-employees.js');
const generateTemplate = require('./src/generate-template');

const inquirer = require('inquirer');

let teamInfo = {
    manager:[],
    engineer:[],
    intern: []

};


const askAgain = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployees',
            message: 'Would you like to add other employees?',
            default: false
        },

        {
            type: 'list',
            name: 'otherEmployees',
            message: 'Which of the following employees would you like to add?',
            choices: [
                'engineer',
                'intern',
                'none!'
            ]
        }
    ])
    .then(info => {
        console.log('INFO', info);
        if (info.otherEmployees === 'none!'){

            

            console.log('TMINF', teamInfo);
            
            let employees = generateEmployees(teamInfo);

            console.log('emp', employees);

          let template = generateTemplate(employees);

            // this gives me the correct info
            // console.log('makeFunciton', generateEmployees(teamInfo));

            fs.writeFile('index.html', template, () => {

            });

        }

        if (info.otherEmployees === 'engineer') {
            promptEngineer();
        } else if (info.otherEmployees === 'intern') {
            promptIntern();
        }
    })
};

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managersName',
            message: 'What is the managers name? (Required)',
            validate: name => {
                if (name){
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers employee Id (Required)',
            validate: id => {
                if(id) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email address? (Required)',
            validate: email => {
                if (email){
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'What is the managers office number? (Required)',
            validate: num => {
                if (num) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    // .then( (manInfo) => {
    //     console.log(manInfo);

    //     askAgain();
    // })
};



const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name? (Required)',
            validate: engName => {
                if (engName) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'engineerId',
            message:'What is the engineers employee id? (Required)',
            validate:enginId => {
                if (enginId) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'engEmail',
            message: 'What is the engineers email address? (Required)',
            validate: engEmail => {
                if(engEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'ghUsername',
            message: 'what is the engineers GitHub username? (Required)',
            validate: engGh => {
                if (engGh) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then((engInfo) => {
        // console.log('eng', engInfo);

        teamInfo.engineer.push(engInfo);

        askAgain();
        
        // console.log('team',teamInfo);


        // return teamInfo;
    })
};



const promptIntern = () => {

    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name? (Required)',
            validate: intName => {
                if (intName) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns employee Id? (Required)',
            validate: intId => {
                if(intId) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'intEmail',
            message: 'What is the interns email address? (Required)',
            validate: intEmail => {
                if (intEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'intSchool',
            message: 'What school did the intern attend? (Required)',
            validate: intSchool => {
                if (intSchool) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then((intInfo) => {

        teamInfo.intern.push(intInfo);
        // console.log(teamInfo);
        askAgain();

        
        // return teamInfo;
    })
}

promptUser()
.then(manInfo => {
    teamInfo.manager.push(manInfo);
    askAgain();
    // console.log(teamInfo.manager);

    // return teamInfo;
})
