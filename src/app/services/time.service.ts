import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Times } from '../models/Times'


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private ulr = 'https://worldcup.sfg.io/teams/';
  private url2 = 'https://worldcup.sfg.io/matches/country?fifa_code='

  constructor(private http: HttpClient) { }


  times_get():Observable<Times[]>{
    return this.http.get<Times[]>(this.ulr)
  }

  dadosTime_get(fifa_code: string):Observable<any>{
    return this.http.get<any>(this.url2 + fifa_code)
  }
}
