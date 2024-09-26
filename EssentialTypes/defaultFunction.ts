export const concatName = (first: string, last = "Pocock") => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
};