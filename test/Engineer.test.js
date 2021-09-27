const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Should return assigned GitHub account', () => {
        const github = 'jacksonwhite4725';
        const newEngineer = new Engineer('Jackson', 1, 'jackson@gmail.com', github);

        expect(newEngineer.github).tobe(github);
    });

    it('Should return GitHub with getGithub() method', () => {
        const github = 'jacksonwhite4725';
        const newEngineer = new Engineer('Jackson', 1, 'jackson@gmail.com', github);

        expect(newEngineer.getGithub()).tobe(github);
    });

    it('Should return a value of "Engineer" with getRole() method', () => {
        const role = 'Engineer',
        const newEngineer = new Engineer('Jackson', 1, 'jackson@gmail.com', 'jacksonwhite4725');

        expect(newEngineer.getRole()).tobe(role);
    });
});