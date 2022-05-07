const Manager = require('../lib/Manager');

test('create manager class test ', () => {
    const manger = new Manager('mary', '0', 'mary@gmail.com', '281');

    expect(manger.name).toEqual(expect.any(String));
    expect(manger.id).toEqual(expect.any(String));
    expect(manger.email).toEqual(expect.any(String));
    expect(manger.officeNum).toEqual(expect.any(String));
})


test('return manager role ', () => {
    const manger = new Manager('mary', '0', 'mary@gmail.com', '281');

    expect(manger.getRole()).toEqual(expect.any(String));
})
