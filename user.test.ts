import {User} from './user';

describe('test', () => {
    it('create instance', () => {
        const q1 = new User("Rupali", "test");
        expect(q1.name).toBe("Rupali");

    }) 

    it('should log the full name correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const user = new User('Rupali', 'Pune');
        user.getFullName();
        expect(consoleSpy).toHaveBeenCalledWith('RupaliPune'); // Ensure spaces if needed.
        consoleSpy.mockRestore(); // Restore the original console.log
      });
})