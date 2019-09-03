import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resultados } from '../models/resultados';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private url = 'https://worldcup.sfg.io/matches';

  constructor(private http: HttpClient) { }

  resultados_get(): Observable<Resultados[]>{
    return this.http.get<Resultados[]>(this.url)
  }
}
