import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface DemandeReservation {
  coloc: string;
  nomPrenom: string;
  date: string;
  jours: number;
  contribution: string;
  RaffVote: string; // "oui" | "non" | ""
  HVote: string;
  PaulVote: string;
}

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  user!: string;
  demande!: DemandeReservation;

  // vote sélectionné par l'utilisateur actuel
  myVote: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user") || "H";

    // Une demande fictive
    this.demande = {
      coloc: "Raff",
      nomPrenom: "Jean Dupont",
      date: "2025-09-10",
      jours: 3,
      contribution: "50€",
      RaffVote: "oui",
      HVote: "",
      PaulVote: "non"
    };
  }

  goBack() {
    this.router.navigate(['/admin/dashboard']); // adapte selon ton routing
  }

  selectVote(vote: string) {
    this.myVote = vote;
  }

  validateVote() {
    alert(`Tu as voté: ${this.myVote}`);
    // Ici tu pourras sauvegarder en API plus tard
  }

  // méthode pour récupérer les votes des autres
  // méthode pour récupérer TOUS les votes
  getOtherVotes() {
    return [
      { name: "Raff", value: this.demande.RaffVote },
      { name: "H", value: this.demande.HVote },
      { name: "Paul", value: this.demande.PaulVote }
    ];
  }

}
