import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html'
})

export class DefaultsComponent implements OnInit {

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

  constructor (private router: Router) {}

  ngOnInit(): void {}

  passLatLong(lat: number, long: number) {
    this.router.navigate(['/detail', lat, long])
    console.log("Lat & Long passati")
  }

}