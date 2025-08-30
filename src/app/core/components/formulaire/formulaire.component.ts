import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.formulaire = this.fb.group({
      roommate: ['', Validators.required],
      date: ['', Validators.required],
      jours: ['', [Validators.required, Validators.min(1)]],
      nomPrenom: ['', Validators.required],
      telephone: ['', Validators.required],
      contribution: ['']
    });
  }

  goBack() {
    this.location.back();
  }

  submitForm() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value);
      // Ici tu peux envoyer les données au backend ou à un service
    } else {
      console.log('Formulaire invalide');
    }
  }
}
