import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LandingComponent,
    FormulaireComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
