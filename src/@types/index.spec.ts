export interface IRegisterRequest {
    email: string;
    name: string;
    password: string;
}


export interface ILoginRequest {
    email?: string;
    password?: string;
}


export interface IUser {
    id: string;
    email: string;
    name: string;
}
