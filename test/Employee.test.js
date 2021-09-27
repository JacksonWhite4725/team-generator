const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Should return assigned name', () => {
        const name = 'Jackson';
        const newEmployee = new Employee(name);

        expect(newEmployee.name).tobe(name);
    });

    it('Should return assigned ID', () => {
        const id = 1;
        const newEmployee = new Employee("Jackson", id);

        expect(newEmployee.id).tobe(id);
    });

    it('Should return assigned email', () => {
        const email = 'jackson@gmail.com';
        const newEmployee = new Employee("Jackson", 1, email);

        expect(newEmployee.email).tobe(email);
    });

    it('Should return name with getName() method', () => {
        const name = 'Jackson';
        const newEmployee = new Employee(name);

        expect(newEmployee.getName()).tobe(name);
    });

    it('Should return ID with getId() method', () => {
        const id = 1;
        const newEmployee = new Employee('Jackson', id);

        expect(newEmployee.getId()).tobe(id);
    });

    it('Should return email with getEmail() method', () => {
        const email = 'jackson@gmail.com';
        const newEmployee = new Employee('Jackson', 1, email);

        expect(newEmployee.getEmail()).tobe(email);
    });

    it('Should return a value of "Employee" with getRole() method', () => {
        const role = 'Employee',
        const newEmployee = new Employee('Jackson', 1, 'jackson@gmail.com');

        expect(newEmployee.getRole()).tobe(role);
    });
});