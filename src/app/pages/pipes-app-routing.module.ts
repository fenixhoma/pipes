import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomPipesComponent } from './customPipes/custom-pipes.component';
import { HeroesPipesComponent } from './heroes-pipes/heroes-pipes.component';
import { PipesNumericComponent } from './pipes-numeric/pipes-numeric.component';
import { PipesComponent } from './pipes/pipes.component';
import { UncommonPipeComponent } from './uncommon-pipe/uncommon-pipe.component';

const routes: Routes = [
    {
        path: '',
        children: [
          { path: 'pipes', component: PipesComponent },
          { path: 'numeric-pipes', component: PipesNumericComponent },
          { path: 'uncommon-pipes', component: UncommonPipeComponent },
          { path: 'custom-pipes', component: CustomPipesComponent },
          { path: 'heroes', component: HeroesPipesComponent },
          { path: '**', redirectTo: 'pipes' }
        ]
      }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class pipesAppRoutingModule { }