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

  predifinedLocality = {
    newYork: {
      lat: 40.779897,
      long: -73.968565
    },
    rome: {
      lat: 41.8992,
      long: 12.5450
    },
    london: {
      lat: 51.509865,
      long: -0.118092
    },
    tokyo: {
      lat: 35.652832,
      long: 139.839478
    }

  }

  constructor (private meteoService: MeteoService, private router: Router) {}

  ngOnInit(): void {}

  passLatLong(lat: number, long: number) {
    this.router.navigate(['/detail', lat, long])
    console.log("Lat & Long passati")
  }

}