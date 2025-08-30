import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router :Router){

  }
  demandes = [
    {
      roommate: 'Alice',
      date: new Date(),
      jours: 3,
      nomPrenom: 'Jean Dupont',
      telephone: '06 12 34 56 78',
      contribution: '50€'
    }
  ];

  reservations = [
    {
      roommate: 'Bob',
      date: new Date(),
      jours: 2,
      nomPrenom: 'Claire Martin'
    },
    {
      roommate: 'Alice',
      date: new Date(new Date().setDate(new Date().getDate() + 5)),
      jours: 1,
      nomPrenom: 'Paul Durand'
    }
  ];

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
