"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatName = void 0;
const concatName = (first, last = "Pocock") => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
exports.concatName = concatName;
