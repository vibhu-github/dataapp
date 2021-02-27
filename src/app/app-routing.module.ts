import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './component/comp1/comp1.component';
import { Comp2Component } from './component/comp2/comp2.component';

const routes: Routes = [{ path: '', component:Comp1Component},
{ path: 'comp2', component: Comp2Component},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
