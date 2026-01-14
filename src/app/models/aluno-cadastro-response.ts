import { Aluno } from "./aluno";

export interface AlunoCadastroResponse {
    status: string;
    code: number;
    message: string;
    aluno: Aluno
}
