import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ret-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  title
  constructor() {
    this.title = 'Curso Loco de Angular';
   }

  ngOnInit() {
  }

}
