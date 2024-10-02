const dangerousFunction = (arrayOfNumbers: number[]) => {
    arrayOfNumbers.pop();
    arrayOfNumbers.pop();
};
type Coordinate = readonly [number, number];
const myHouse: Coordinate = [0, 0];


dangerousFunction(
    // @ts-expect-error
    myHouse,
);