import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoCadastroResponse } from '../models/aluno-cadastro-response';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private urlApi: string = 'http://localhost:8080/bibliotecario/cadastrarAluno';

  constructor(private http: HttpClient) { }
  
  cadastrar(aluno: Aluno): Observable<AlunoCadastroResponse> {
    return this.http.post<AlunoCadastroResponse>(this.urlApi, aluno);
  }
}
