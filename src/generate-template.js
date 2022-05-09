


createManagerTemplate = (managerInfo)=>{
    console.log('manager info', managerInfo);
    return `       

    <section class="border">
        <header class="blue"><h2>${managerInfo[0].getName()}</h2><br><h2>${managerInfo[0].getRole()}</h2></header>
        <div>
            <p class="pborder">ID: ${managerInfo[0].getId()}</p>
            <p class="pborder">Email: <a href="mailto:${managerInfo[0].getEmail()}">${managerInfo[0].getEmail()}</a></p>
            <p class="pborder">Office number: ${managerInfo[0].officeNum}  </p>

        </div>
    </section>

    `
}


createEngineerTemplate = (engineerInfo)=>{

    let template = '';

    engineerInfo.forEach(engineer => {
        template += `       

    <section class="border">
        <header class="blue"><h2>${engineer.getName()}</h2><br><h2>${engineer.getRole()}</h2></header>
        <div>
            <p class="pborder">ID: ${engineer.getId()}</p>
            <p class="pborder">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="pborder">GitHub: <a href="https://github.com/${engineer.github}" target="_blank"> https://github.com/${engineer.github}</a></p>

        </div>
    </section>

    `
    })

    console.log(template);

    return template;


}



createInternTemplate = (internInfo)=>{

    let template = '';

    internInfo.forEach(intern => {
        template += `       

        <section class="border">
            <header class="blue"><h2>${intern.getName()}</h2><br><h2>${intern.getRole()}</h2></header>
            <div>
                <p class="pborder">ID: ${intern.getId()}</p>
                <p class="pborder">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="pborder">School: ${intern.school}  </p>
    
            </div>
        </section>
    
        `
    });

    

return template;
}



employeesHtmlTemplate = (totalEmployees) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./src/style.css" rel="stylesheet" type="text/css"></link>
    <title>Document</title>
</head>
<body>
    <header class="red">
        <h1>My Team</h1>
    </header>
    <main class="flexContainer">

    ${createManagerTemplate(totalEmployees.managers)}

   ${createEngineerTemplate(totalEmployees.engineers)}
   
    ${createInternTemplate(totalEmployees.interns)}
    
    


    </main>
    
</body>
</html>
    `
}





module.exports = employeesHtmlTemplate;
