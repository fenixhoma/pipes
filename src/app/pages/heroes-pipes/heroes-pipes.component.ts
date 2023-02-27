import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from 'src/app/interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroes-pipes',
  templateUrl: './heroes-pipes.component.html',
  styles: [
  ]
})
export class HeroesPipesComponent {

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Reverse Flash',
      vuela: false,
      color: Color.amarillo
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Shazam',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Angel',
      vuela: true,
      color: Color.blanco
    },
    {
      nombre: 'Silver Surfer',
      vuela: true,
      color: Color.plata
    }
  ]; 
  
  orderBy: string = '';

  constructor() { }

  changeOrder(value: string){
    this.orderBy = value;
    console.log(this.orderBy);
  }

}
