import { Component, OnInit } from '@angular/core';
import { Times } from '../models/times';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  userFilter: any = {type_of_event: "goal"}

  fifa_code: string;
  dadosTime: Times
  constructor(private time: TimeService) { 
    this.dadosTime = new Times();
  }

  ngOnInit() {
  }

  dados(){
    this.time.dadosTime_get(this.fifa_code).subscribe(
      res =>{
        this.dadosTime = res
        console.log(res);
      }
    )
  }

}
