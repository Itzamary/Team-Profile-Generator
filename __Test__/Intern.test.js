const Intern = require('../lib/Intern');

test('create intern class test ', () => {
    const intern = new Intern('mary', '0', 'mary@gmail.com', 'Rice University');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})


test('get interns school info', () => {
    const internSchool = new Intern('mary', '0', 'mary@gmail.com', 'Rice University');

    expect(internSchool.school).toEqual(expect.any(String));
})


test('get interns  role', () => {
    const internRole = new Intern('mary', '0', 'mary@gmail.com', 'Rice University');

    expect(internRole.role).toEqual(expect.any(String));
})

