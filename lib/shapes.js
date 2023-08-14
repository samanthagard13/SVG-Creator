const shapeChoices = [
    'Triangle',
    'Circle',
    'Square'
];

const createShape = (shape, shapeColor) => {
    let shapeInfo = '';

    switch (shape) {
        case 'Triangle':
            shapeInfo = `<polygon points="25,10 50,50 0,50" fill="${shapeColor}" />`;
            break;
        case 'Circle':
            shapeInfo = `<circle cx="100" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'Square':
            shapeInfo = `<rect x="10" y="10" width="40" height="40" fill="${shapeColor}" />`;
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
