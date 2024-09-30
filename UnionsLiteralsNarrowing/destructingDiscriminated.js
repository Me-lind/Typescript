"use strict";
function calculateArea1(shape) {
    if (shape.kind === 'circle') {
        const { radius } = shape;
        return Math.PI * radius * radius;
    }
    else {
        const { sideLength } = shape;
        return sideLength * sideLength;
    }
}
