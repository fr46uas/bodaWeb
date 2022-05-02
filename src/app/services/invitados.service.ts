import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {

  baseUrl: string | undefined;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "https://bodasergio.herokuapp.com/boda"
  }

  getInvitados() {
    return this.httpClient.get<any[]>(`${this.baseUrl}/list`)
  }

  postInvitado(item: any) {
    return this.httpClient.post(`${this.baseUrl}/create`, item)
  }

}
