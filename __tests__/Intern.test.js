const Intern = require('../lib/Intern');

test('creates a new intern', () => {
    const intern = new Intern('Maddie', '3', 'maddie9@gmail.com', 'Washington University');

    expect(intern.name).toBe('Maddie');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('get school', () => {
    const intern = new Intern('Maddie', '3', 'maddie9@gmail.com', 'Washington University');

    expect(intern.getSchool()).toBe('Washington University');
});

test('get role', () => {
    const intern = new Intern('Maddie', '3', 'maddie9@gmail.com', 'Washington University');

    expect(intern.getRole()).toBe('Intern');
});