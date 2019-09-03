import { Component, OnInit } from '@angular/core';
import { Times } from '../models/times';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  times: Times[];
  
  constructor(private time: TimeService) {
    this.times = []
   }

  ngOnInit() {
    this.time.times_get().subscribe(
      res =>{
        this.times = res
      }
    )
  }

}
