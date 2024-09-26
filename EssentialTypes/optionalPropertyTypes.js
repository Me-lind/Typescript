"use strict";
const concatName1 = (user) => {
    if (!user.last) {
        return user.first;
    }
    return `${user.first} ${user.last}`;
};
