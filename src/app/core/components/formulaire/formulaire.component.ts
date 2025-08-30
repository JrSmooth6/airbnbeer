import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulaire = this.fb.group({
      jours: [null, [Validators.required, Validators.min(1)]],
      nomPrenom: ['', Validators.required],
      telephone: ['', Validators.required],
      contribution: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.formulaire.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    console.log('Formulaire soumis :', this.formulaire.value);
    alert('Merci ! Formulaire soumis avec succès.');
    this.formulaire.reset();
  }

  goBack() {
    this.router.navigateByUrl("/");
  }
}
