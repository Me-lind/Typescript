interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
type PickedUser = Pick<User, "name" | "email">;
// or
// type OmittedUser = Omit<User, "id" | "role">;

const fetchUser = async (): Promise<PickedUser> => {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
};
import {Equal , Expect} from "@total-typescript/helpers"
const example = async () => {
    const user = await fetchUser();

    type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};