import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesComponent } from './pipes/pipes.component';

import { CustomPipesComponent } from './customPipes/custom-pipes.component';
import { HeroesPipesComponent } from './heroes-pipes/heroes-pipes.component';
import { pipesAppRoutingModule } from './pipes-app-routing.module';
import { PipesNumericComponent } from './pipes-numeric/pipes-numeric.component';
import { UncommonPipeComponent } from './uncommon-pipe/uncommon-pipe.component';

import { ColoresPipe } from '../pipes/colores.pipe';
import { MayusculasPipe } from '../pipes/mayusculas.pipe';
import { OrdernarPipe } from '../pipes/ordernar.pipe';
import { VuelaPipe } from '../pipes/vuela.pipe';




@NgModule({
  declarations: [
    ColoresPipe,
    CustomPipesComponent,
    HeroesPipesComponent,
    MayusculasPipe,
    OrdernarPipe,
    PipesComponent,
    PipesNumericComponent,
    UncommonPipeComponent,
    VuelaPipe
  ],
  imports: [
    CommonModule,
    pipesAppRoutingModule
  ]
})
export class PipesAppModule { }
