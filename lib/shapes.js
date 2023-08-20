const shapeChoices = [
    'Triangle',
    'Circle',
    'Square'
];

const createShape = (shape, shapeColor) => {
    let shapeInfo = '';

    switch (shape) {
        case 'Triangle':
            shapeInfo = `<polygon points="150,25 250,150 50,150" fill="${shapeColor}" />`;
            break;
        case 'Circle':
            shapeInfo = `<circle cx="150" cy="100" r="75" fill="${shapeColor}" />`;
            break;
        case 'Square':
            shapeInfo = `<rect x="87" y="50" width="125" height="125" fill="${shapeColor}" />`;
            break;
        default:
            break;
    }

    return shapeInfo;
};

module.exports = {
    shapeChoices,
    createShape
};
