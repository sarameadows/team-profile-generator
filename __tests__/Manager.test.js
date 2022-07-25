const Manager = require('../lib/Manager');

test('create new manager', () => {
    const manager = new Manager('Emily', '2', 'emily@gmail.com', '4444444444');

    expect(manager.name).toBe('Emily');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('get role', () => {
    const manager = new Manager('Emily', '2', 'emily@gmail.com', '4444444444');

    expect(manager.getRole()).toBe('Manager');
});

test('get office number', () => {
    const manager = new Manager('Emily', '2', 'emily@gmail.com', '4444444444');

    expect(manager.getOfficeNumber()).toBe('4444444444');
});