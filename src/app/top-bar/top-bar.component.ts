import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {

  constructor (private router: Router) {}

  navigateToProva () {
    // Navigate to /results#top
    this.router.navigate(['/home'], { fragment: 'provaApi' });
  }

}