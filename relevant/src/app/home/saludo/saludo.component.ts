import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ret-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre
  aNombres
  constructor() { }

  ngOnInit() {
    this.nombre = 'Pepe';
    this.aNombres = []
  }

  onBorrar() {
    this.nombre = null;
  }

  onAdd() {
    this.aNombres.push(this.nombre)
    this.nombre = null
  }

}
