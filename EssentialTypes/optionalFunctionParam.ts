const concatName2 = (first: string, last?: string) => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
};
const result2 = concatName2("John", "Doe");
