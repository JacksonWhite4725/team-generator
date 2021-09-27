const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Should return assigned school', () => {
        const school = 'NYU Shanghai';
        const newIntern = new Intern('Jackson', 1, 'jackson@gmail.com', school);

        expect(newIntern.school).tobe(school);
    });

    it('Should return school with getSchool() method', () => {
        const school = 'NYU Shanghai';
        const newIntern = new Intern('Jackson', 1, 'jackson@gmail.com', school);

        expect(newIntern.getSchool()).tobe(school);
    });

    it('Should return a value of "Intern" with getRole() method', () => {
        const role = 'Intern',
        const newIntern = new Intern('Jackson', 1, 'jackson@gmail.com', 'NYU Shanghai');

        expect(newIntern.getRole()).tobe(role);
    });
});