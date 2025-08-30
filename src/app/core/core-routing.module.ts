import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [
  {path : "" , component : LandingComponent},
  {path : "formulaire", component : FormulaireComponent},
  {path : "presentation", component : PresentationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
