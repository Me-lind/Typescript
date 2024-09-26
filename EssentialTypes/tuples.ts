import {Expect ,Equal} from '@total-typescript/helpers'

const setRange = (range: [x: number, y: number]) => {
    const x = range[0];
    const y = range[1];

    // Do something with x and y in here
    // x and y should both be numbers!
    type tests = [
        Expect<Equal<typeof x, number>>,
        Expect<Equal<typeof y, number>>,
    ];
};