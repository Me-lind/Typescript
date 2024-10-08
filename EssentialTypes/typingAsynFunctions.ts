async function fetchData(): Promise<number> {
    const response = await fetch("https://api.example.com/data");

    const data = await response.json();

    return data;
}

import { Expect, Equal } from "@total-typescript/helpers";

const example = async () => {
    const data = await fetchData();

    type test = Expect<Equal<typeof data, number>>;
};