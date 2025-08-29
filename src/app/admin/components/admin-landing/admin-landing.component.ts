import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent {
  userFound !: boolean;
  userName!: string;
  passwordForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.getUserFromLocal();
    this.passwordForm = this.fb.group({
      d1: [''],
      d2: [''],
      d3: [''],
      d4: [''],
      d5: [''],
      d6: ['']
    });
  }
  goBack() {
    this.router.navigate(['/']); // ou une autre route
  }

  selectUser(user: string) {
    localStorage.setItem("user", user);
    this.getUserFromLocal();
    
  }
  focusNext(event: any, nextId: string) {
    const input = event.target;
    if (input.value.length === 1) {
      const nextInput = document.querySelector<HTMLInputElement>(`[formControlName="${nextId}"]`);
      nextInput?.focus();
    }
  }

  getUserFromLocal() {
    this.userFound = localStorage.getItem("user") != null || false;
    this.userName = localStorage.getItem('user')|| "";
  }
  submitPassword() {
    const password = Object.values(this.passwordForm.value).join('');
    console.log('Mot de passe saisi :', password);
    // TODO : valider le mot de passe
  }
  wrongPerson(){
    localStorage.clear;
    this.userFound = false;
    this.userName ="";
  }

}
