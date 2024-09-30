interface BaseEntity1 {
    id: string;
    createdAt: Date;
}
interface User1 extends BaseEntity1 {
    name: string;
    email: string;
}

interface Product1 extends BaseEntity {
    name: string;
    price: number;
}