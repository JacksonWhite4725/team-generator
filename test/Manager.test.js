const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should return assigned office number', () => {
        const officeNumber = '10';
        const newManager = new Manager('Jackson', 1, 'jackson@gmail.com', officeNumber);

        expect(newManager.officeNumber).tobe(officeNumber);
    });

    it('Should return a value of "Manager" with getRole() method', () => {
        const role = 'Manager',
        const newManager = new Manager('Jackson', 1, 'jackson@gmail.com', 10);

        expect(newManager.getRole()).tobe(role);
    });
});