import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styles: [
  ]
})
export class CustomPipesComponent {

  value: string = 'Lorem Ipsum';
  extra: boolean = false;

  constructor() { }

  changeValue(){
    this.extra = !this.extra;
  }


}
