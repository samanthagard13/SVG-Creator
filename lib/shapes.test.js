const { createShape } = require('./shapes');

describe('createShape', () => {
    it('should use the shape and color from user input', () => {
        const shapeSVG = createShape('Triangle', 'blue');
        const expectedShape = `<polygon points="150,25 250,150 50,150" fill="blue" />`
        expect(shapeSVG).toEqual(expectedShape);
    });
});

describe('createShape', () => {
    it('should use the shape and color from user input', () => {
        const shapeSVG = createShape('Circle', 'red');
        const expectedShape = `<circle cx="150" cy="100" r="75" fill="red" />`
        expect(shapeSVG).toEqual(expectedShape);
    });
});

describe('createShape', () => {
    it('should use the shape and color from user input', () => {
        const shapeSVG = createShape('Square', 'green');
        const expectedShape = `<rect x="87" y="50" width="125" height="125" fill="green" />`
        expect(shapeSVG).toEqual(expectedShape);
    });
});
