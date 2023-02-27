import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
    `
    .card {
      margin: 20px;
    }

    .accordion-flush {
      border: 0.1px solid #c1bdbd;
    }
    `
  ]
})
export class PipesComponent {
 
  nombre: string = 'ViCTor hOmA';
  cantidad: number = 1220;
  fecha: Date = new Date();

  obj = {
    nombre: this.nombre,
    monto: this.cantidad
  }

  constructor() { }
  
}
