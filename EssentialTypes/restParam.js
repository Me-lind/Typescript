"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenate = concatenate;
function concatenate(...strings) {
    // Rest parameter 'strings' implicitly has an 'any[]' type.
    return strings.join("");
}
