
interface Phone {
    id: number;
    name: string;
    storage: string;
    color?: string;
    model?: string;
    price: string;
    discount?: string | null;
    previous_price?: string | null;
    label?: string | null;
    image: string;
}

export const phoneData: Phone[] = [
    {
        id: 1,
        name: "Смартфон Samsung Galaxy A12",
        storage: "32GB",
        color: "Black",
        model: "SM-A125F",
        price: "25 990 000 Сум",
        discount: null,
        label: "Новинка",
        image:"phone1.png"
    },
    {
        id: 2,
        name: "Смартфон Samsung Galaxy S21",
        storage: "128GB",
        model: "SM-G991B",
        price: "67 990 000 Сум",
        discount: null,
        previous_price: "74 990 000 Сум",
        image: "phone2.png"
    },
    {
        id: 3,
        name: "Смартфон Samsung Galaxy S21",
        storage: "256GB",
        model: "SM-G991B",
        price: "72 990 000 Сум",
        discount: "9%",
        previous_price: "79 990 000 Сум",
        image: "phone4.png"
    },
    {
        id: 4,
        name: "Смартфон Xiaomi Mi 10T",
        storage: "128GB",
        color: "Black",
        price: "72 990 000 Сум",
        discount: null,
        previous_price: "79 990 000 Сум",
        image: "phone5.png"
    },
    {
        id: 5,
        name: "Смартфон Xiaomi Mi 10T",
        storage: "128GB",
        color: "Black",
        price: "72 990 000 Сум",
        discount: null,
        previous_price: "79 990 000 Сум",
        image: "phone6.png"
    },
];
