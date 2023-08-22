const createShape = require('./shapes');

describe('Shapes', () => {
    describe('createShape', () => {
        it('should use the color from user input', () => {
            const shapeSVG = createShape('Triangle', 'blue');
            const expectedShape = `<polygon points="150,25 250,150 50,150" fill="blue" />`
            expect(shapeSVG).toEqual(expectedShape);
        });
    })
});

