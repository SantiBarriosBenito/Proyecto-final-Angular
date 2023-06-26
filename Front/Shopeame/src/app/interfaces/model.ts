export interface VehiculosI{
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export interface UserI{
    id?: string;
    email: string;
    password: string;
    role?: string;
}