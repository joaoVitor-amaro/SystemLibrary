import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BibliotecarioRequest } from '../models/bibliotecario-request';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { BibliotecarioDTO } from '../models/bibliotecario-dto';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private api: string = 'http://localhost:8080/admin/bibliotecarios';

  constructor(private http: HttpClient) {}

  cadastrarBibliotecario(request: BibliotecarioRequest): Observable<ApiResponse<BibliotecarioDTO>>{ {
    return this.http.post<ApiResponse<BibliotecarioDTO>>(this.api, request);
  }

  }
  
}
