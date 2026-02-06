import { Injectable } from '@angular/core';
import { AtivacaoRequest } from '../models/ativacao-request';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AtivarService {

  private urlApi = 'http://localhost:8080/ativar';

  constructor(private http: HttpClient){}

  ativarConta(ativarUser: AtivacaoRequest): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(this.urlApi, ativarUser);
  }
  
}
