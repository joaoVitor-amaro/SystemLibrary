import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoRequest } from '../models/aluno-request';
import { ApiResponse } from '../models/api-response';
import { AlunoResponse } from '../models/aluno-response';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private urlApi: string = 'http://localhost:8080/bibliotecario/alunos';

  constructor(private http: HttpClient) { }
  
  cadastrar(aluno: AlunoRequest): Observable<ApiResponse<AlunoResponse>> {
    return this.http.post<ApiResponse<AlunoResponse>>(this.urlApi, aluno);
  }
}
