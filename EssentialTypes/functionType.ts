type User1 = {
    id: string;
    name: string;
};
type MakeChangeFunc = (user: User1) => User;

const modifyUser = (user: User1[], id: string, makeChange: MakeChangeFunc) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }

        return u;
    });
};
const users: User1[] = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];

modifyUser(
    users,
    "1",
    // @ts-expect-error
    (user) => {
        return { ...user, name: 123 };
    },
);