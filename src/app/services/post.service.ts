import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // query é usado sempre que quisermos consulaar uma colação de dados (Posts neste caso)
  query(): Observable<Array<any>> { // Observable ajuda com o autocomplete e a visualizar erros, no entanto não é necesario
    return this.http.get(this.baseUrl);
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  save(data: any): Observable<any> {
    // se não existir id faz um post se não (se existir id) faz um put OPERAÇÃO TERNARIA
    return !data.id ?  this.http.post(this.baseUrl, data)
        :  this.http.put(`${this.baseUrl}/${data.id}`, data);
  }

  destroy(id: number): Observable<any> { // retorna status code 204 (sem conteudo na resposta)
     return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
