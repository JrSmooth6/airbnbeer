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
  prenom!: string ;
  imageSrc!: string; // ton image dans /assets/images
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

      // Rechercher l'entrée correspondant au numéro
      const foundEntry = this.interpolList.find(entry => entry.numero === tel);

      if (foundEntry) {
        // Stocker le prénom pour la popup
        this.prenom = foundEntry.nom;

        // Générer un nom de fichier safe (sans accent et en minuscule)
        const safeName = this.prenom.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const extensions = ['jpg', 'jpeg', 'png', 'webp'];

        // Chercher le fichier existant dans assets/img
        for (let ext of extensions) {
          const path = `assets/img/${safeName}.${ext}`;
          const img = new Image();
          img.src = path;
          img.onload = () => {
            this.imageSrc = path; // Mettre à jour imageSrc quand le fichier existe
          };
        }

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
    }, 4000); // 4 secondes pour le premier popup
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

