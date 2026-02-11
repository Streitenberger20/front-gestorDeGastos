import type { LoginRequest } from "./LoginRequest";

type LoginInputProps = { 
    label: string; 
    type?: string; 
    name?: keyof LoginRequest;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { LoginInputProps };