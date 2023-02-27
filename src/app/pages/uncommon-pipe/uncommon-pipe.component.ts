import { Component } from '@angular/core';
import { promises } from 'dns';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-pipe',
  templateUrl: './uncommon-pipe.component.html',
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
export class UncommonPipeComponent {

  // I18nSelect & I18nPlural 
  
  clientes: string[] = ['Maria','Juan', 'Ari', 'Carolina', 'Oswaldo', 'Tony', 'UserName1'];
  
  clienteMapa = {
    '=0': 'No tenemos clientes esperando',
    '=1': 'Tenemos un clientes esperando',
    'other': 'Tenemos # clientes esperando',
  }
    
    mapGenero = {
      'female' : 'invitarla',
      'male': 'invitarlo',
      'other': 'invitarl@'
    }

  persona = {
    nombre: 'Victor',
    edad: 30,
    direccion: 'P. shermar st. wallaby'
  }

  miObservable = interval(1000);

  valuePromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('we have an answer, yoo-hoo');
    }, 3000);
  })

}
