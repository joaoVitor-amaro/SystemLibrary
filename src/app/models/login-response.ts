import { Usuario } from "./usuario";

export interface LoginResponse {
    status: string;
    code: number;
    message: string;
    data: Usuario;    
}
