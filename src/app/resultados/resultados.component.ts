import { Component, OnInit } from '@angular/core';
import { Resultados } from '../models/resultados';
import { ResultadosService } from '../services/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: Resultados[];
  constructor(private rs: ResultadosService) { 
    this.resultados = []
  }

  ngOnInit() {
    this.rs.resultados_get().subscribe(
      res =>{
        this.resultados = res;
        console.log(res)
      }
    )
  }

}
