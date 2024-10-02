"use strict";
const dangerousFunction = (arrayOfNumbers) => {
    arrayOfNumbers.pop();
    arrayOfNumbers.pop();
};
const myHouse = [0, 0];
dangerousFunction(
// @ts-expect-error
myHouse);
