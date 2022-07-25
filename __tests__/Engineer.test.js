const Engineer = require('../lib/Engineer');

test('creates a new engineer', () => {
    const engineer = new Engineer('Maddie', '3', 'maddie9@gmail.com', 'maddiegithub');

    expect(engineer.name).toBe('Maddie');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('get github', () => {
    const engineer = new Engineer('Maddie', '3', 'maddie9@gmail.com', 'maddiegithub');

    expect(engineer.getGithub()).toBe('maddiegithub');
});

test('get role', () => {
    const engineer = new Engineer('Maddie', '3', 'maddie9@gmail.com', 'maddiegithub');

    expect(engineer.getRole()).toBe('Engineer');
});