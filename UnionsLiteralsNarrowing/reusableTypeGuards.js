"use strict";
const hasDataId = (value) => {
    return (typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof value.data === 'object' &&
        value.data !== null &&
        'id' in value.data &&
        typeof value.data.id === 'string');
};
const parseValue2 = (value) => {
    if (hasDataId(value)) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
const parseValueAgain = (value) => {
    if (hasDataId(value)) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
