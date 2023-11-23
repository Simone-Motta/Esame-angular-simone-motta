import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../_services/meteo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  jsonIn = {
    lat: 0,
    long: 0
  }

  constructor (private meteoService: MeteoService, private router: Router) {}

  ngOnInit(): void {}

  passLatLong(lat: number, long: number) {
    this.router.navigate(['/detail', lat, long])
    console.log("Lat & Long passati")
  }

}