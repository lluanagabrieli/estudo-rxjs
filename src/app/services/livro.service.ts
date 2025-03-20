import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  // serviço que dá acesso a todos os métodos HTTP do Angular
  http = inject(HttpClient);

  constructor() { }

  // url com a api do google
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  // método para buscar livros com os parâmetros recebidos no 'valorDigitado'
  buscar(valorDigitado) {
    const params = new HttpParams().append('q', valorDigitado);

    return this.http.get<LivrosResultado>(this.API, { params }).pipe(
      map(response => response.items),
      tap(res => console.log(res))
    );
  }
}
