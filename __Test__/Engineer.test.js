const Engineer = require('../lib/Engineer.js');

test('create engineer class test ', () => {
    const engineer = new Engineer('mary', '0', 'mary@gmail.com',);

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
})


test('get engineer github', () => {
    const engineerGh = new Engineer('mary', '0', 'mary@gmail.com','@github.com');

    expect(engineerGh.getGitHub()).toEqual(expect.any(String));
})


test('get engineer role', () => {
    const engineerRole = new Engineer('mary', '0', 'mary@gmail.com','@github.com');

    expect(engineerRole.getRole()).toEqual(expect.any(String));
})



