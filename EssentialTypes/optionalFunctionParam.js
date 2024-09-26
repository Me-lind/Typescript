"use strict";
const concatName2 = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result2 = concatName2("John", "Doe");
