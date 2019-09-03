import { Component, OnInit } from '@angular/core';
import { Grupos } from '../models/grupos';
import { GruposService } from '../services/grupos.service';
import { Resultados } from '../models/resultados';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  grupos: Grupos[];
  constructor(private gp:GruposService) {
    this.grupos= []
   }

  ngOnInit() {
    this.gp.grupos_get().subscribe(
      res =>{
        this.grupos = res;
        console.log(res)
      }
    )
  }

}
