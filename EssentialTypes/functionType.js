"use strict";
const modifyUser = (user, id, makeChange) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];
modifyUser(users, "1", 
// @ts-expect-error
(user) => {
    return Object.assign(Object.assign({}, user), { name: 123 });
});
