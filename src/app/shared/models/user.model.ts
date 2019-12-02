import { Role } from "./role.model";

export class User {
    created_at: string;
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    login: string;
    password: string;
    meta_role: Role;
    language: string;
    last_sign_in_at: string;
}