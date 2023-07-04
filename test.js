const getRadomNumber = require('./index.js');

describe('getRadomNumber', () => {
    test('should return a number', () => {
        expect(typeof getRadomNumber()).toBe('number');
    });

    test('should return a number between 0 and 99', () => {
        for(let i = 0; i < 1000; i++) {
            const num = getRadomNumber();
            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThanOrEqual(99);
        }
    });
});
