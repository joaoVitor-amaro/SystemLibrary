export interface Usuario {
  matricula: number;
  nome: string;
  email: string;
  telefone: string;
  typeUser: 'BIBLIOTECARIO' | 'ALUNO' | 'ADMIN';
}
