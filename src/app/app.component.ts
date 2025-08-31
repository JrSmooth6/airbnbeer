import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirBnBeer';
  showFooter: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd) // ne prend que NavigationEnd
      )
      .subscribe((event) => {
        const navEnd = event as NavigationEnd; // cast sûr maintenant
        this.showFooter = navEnd.url.startsWith('/admin/dashboard');
      });
  }
}
