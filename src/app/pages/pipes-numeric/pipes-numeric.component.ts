import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-numeric',
  templateUrl: './pipes-numeric.component.html',
  styles: [
    `
    .card {
      margin: 10px;
    }

    .accordion-flush {
      border: 0.1px solid #c1bdbd;
    }
    `
  ]
})
export class PipesNumericComponent {

  numero: number = 257667.5677;
  porcentaje: number = 0.4555;

}
