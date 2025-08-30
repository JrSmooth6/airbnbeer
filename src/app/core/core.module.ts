import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { PresentationComponent } from './components/presentation/presentation.component';


@NgModule({
  declarations: [
    LandingComponent,
    FormulaireComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
