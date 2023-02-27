import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'pages',
      loadChildren: () => import('./pages/pipes-app.module').then(m => m.PipesAppModule)
    },
    {
      path: '**',
      redirectTo: 'pages'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

