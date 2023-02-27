import { Component, OnInit } from '@angular/core';

interface Menu 
{
  name: string,
  items: MenuItem[]
}

interface MenuItem {
  ruta: string,
  nombre: string,
  icon: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  constructor() { }

  menuItems: Menu[] = [
    {
      name: 'Pipes',
      items: [
        {
          ruta: '/pages/pipes',
          nombre: 'Pipes',
          icon: 'fa fa-cogs'
        },
        {
          ruta: '/pages/numeric-pipes',
          nombre: 'Numeric & Decimal Pipes',
          icon: 'fa fa-cogs'
        },
        {
          ruta: '/pages/uncommon-pipes',
          nombre: 'Uncommon Pipes',
          icon: 'fa fa-cogs'
        }
      ]
    },
    {
      name: 'Custom Pipes',
      items: [
        {
          ruta: '/pages/custom-pipes',
          nombre: 'Custom Pipes',
          icon: 'fa fa-cogs'
        },
        {
          ruta: '/pages/heroes',
          nombre: 'Hero Pipes',
          icon: 'fa fa-cogs'
        }
      ]
    }
  ];




}
