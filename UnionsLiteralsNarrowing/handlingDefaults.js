"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea2(shape) {
    switch (shape.kind) {
        case 'circle': {
            return Math.PI * shape.radius * shape.radius;
        }
        case 'square': {
            return shape.sideLength * shape.sideLength;
        }
    }
}
it('Should calculate the area of a circle when no kind is passed', () => {
    const result = calculateArea2({
        radius: 5,
    });
    expect(result).toBe(78.53981633974483);
});
