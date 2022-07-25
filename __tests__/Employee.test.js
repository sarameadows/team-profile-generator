const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('Sara', '1', 'sameads9@gmail.com');

    expect(employee.name).toBe('Sara');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('Sara', '1', 'sameads9@gmail.com');

    expect(employee.getName()).toBe('Sara');
});

test('get employee id', () => {
    const employee = new Employee('Sara', '1', 'sameads9@gmail.com');

    expect(employee.getId()).toBe('1');
});

test('get employee email', () => {
    const employee = new Employee('Sara', '1', 'sameads9@gmail.com');
    
    expect(employee.getEmail()).toBe('sameads9@gmail.com');
});