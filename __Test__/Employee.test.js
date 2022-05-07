const Employee = require('../lib/Employee.js');

test('create employee object test ', () => {
    const employee = new Employee('mary', '0', 'mary@gmail.com',);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})


test('name of the employee', () => {
    const employeeName = new Employee('mary', '1', 'mary@gamil.com');

    expect(employeeName.name).toEqual(expect.any(String));
})


test('id of the employee', () => {
    const employeeId = new Employee('mary', '1', 'mary@gamil.com');

    expect(employeeId.id).toEqual(expect.any(String));
})

test('email of the employee', () => {
    const employeeEmail = new Employee('mary', '1', 'mary@gamil.com');

    expect(employeeEmail.email).toEqual(expect.any(String));
})

test('get the name property', () => {
    const nameFunc = new Employee('mary', '1', 'mary@gamil.com');

    expect(nameFunc.getName()).toEqual(expect.any(String));
})

test('get the email function', () => {
    const emailFunc = new Employee('mary', 1, 'mary@gamil.com');

    expect(emailFunc.getEmail()).toEqual(expect.any(String));
})

test('get the id function', () => {
    const idFunc = new Employee('mary', 1, 'mary@gamil.com');

    expect(idFunc.id).toEqual(expect.any(Number));
})

test('get the Role function', () => {
    const roleFunc = new Employee('mary', 1, 'mary@gamil.com');

    expect(roleFunc.role).toEqual(expect.any(String));
})