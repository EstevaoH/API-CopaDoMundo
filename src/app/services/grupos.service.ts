import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupos } from '../models/grupos';
import { Observable } from 'rxjs';
import { Resultados } from '../models/resultados';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private ulr = 'https://worldcup.sfg.io/teams/group_results';

  constructor(private http: HttpClient) {}

  grupos_get():Observable<Grupos[]>{
    return this.http.get<Grupos[]>(this.ulr, )
  }
}
