import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface InterpolEntry {
  nom: string;
  numero: string;
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formulaire: FormGroup;
  isPopup: boolean = false;
  interpolList: InterpolEntry[] = [];
  secondPopup: boolean = false;
  prenom: string = "Gabin";
  imageSrc: string = "assets/img/gabin.JPG"; // ton image dans /assets/images
  sliderValue: number = 0;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private http: HttpClient
  ) {
    this.formulaire = this.fb.group({
      roommate: ['', Validators.required],
      date: ['', Validators.required],
      jours: ['', [Validators.required, Validators.min(1)]],
      nomPrenom: ['', Validators.required],
      telephone: ['', Validators.required],
      contribution: [''],
      slider: [0] // valeur initiale du slider

    });
  }

  ngOnInit(): void {
    // Charger la liste interpol.json au démarrage
    this.http.get<InterpolEntry[]>('assets/interpol.json').subscribe(data => {
      this.interpolList = data;
    });
  }

  goBack() {
    this.location.back();
  }

  submitForm() {
    if (this.formulaire.valid) {
      const tel = this.formulaire.value.telephone;

      // Vérifier si le numéro est présent dans interpol.json
      const found = this.interpolList.some(entry => entry.numero === tel);

      if (found) {
        this.showPopup();
      } else {
        console.log('Numéro non listé, pas de popup');
      }

      console.log(this.formulaire.value);
    } else {
      console.log('Formulaire invalide');
    }
  }

  showPopup() {
    this.isPopup = true;
    setTimeout(() => {
      this.isPopup = false;
      this.secondPopup = true;
    }, 5000); // 4 secondes
  }
  validateIdentity() {
    const value = this.formulaire.get('slider')?.value;
    if (value >= 100) {
      alert("Identité confirmée !");
      this.secondPopup = false;
      this.formulaire.get('slider')?.setValue(0); // reset du slider
    }
  }
}
