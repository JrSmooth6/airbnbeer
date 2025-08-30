import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Demande {
  roommate: string;
  date: string;
  jours: number;
  nomPrenom: string;
  telephone: string;
  contribution: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  demandes: Demande[] = [];
  constructor(private router : Router){

  }

  ngOnInit() {
    // Pour test : tu peux remplir avec des données factices
    this.demandes = [
      {
        roommate: 'Paul',
        date: '2025-09-01',
        jours: 3,
        nomPrenom: 'Jean Dupont',
        telephone: '06 12 34 56 78',
        contribution: 'Pack de bières 🍻'
      },
      {
        roommate: 'Raff',
        date: '2025-09-02',
        jours: 2,
        nomPrenom: 'Marie Martin',
        telephone: '07 98 76 54 32',
        contribution: 'Pizza 🍕'
      }
    ];
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
