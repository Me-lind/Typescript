"use strict";
function printNames(names) {
    for (const name of names) {
        console.log(name);
    }
    // @ts-expect-error
    names.push("John");
    // @ts-expect-error
    names[0] = "Billy";
}
