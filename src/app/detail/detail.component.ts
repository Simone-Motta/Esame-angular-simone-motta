import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../_services/meteo.service';
import { ActivatedRoute } from '@angular/router';
import { SunsetResults } from '../model/sunset.model';
import { WeatherForecastResult } from '../model/forecast.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {

    sunsetDetails!: SunsetResults;
    weatherForecastDetails: WeatherForecastResult[] = [];

    constructor (private meteoService: MeteoService, private route: ActivatedRoute) {}

    ngOnInit(): void {

        this.route.paramMap.subscribe(params => {

            const latitudine = parseFloat(params.get("lat")!)
            const longitudine = parseFloat(params.get("long")!)
            console.log(latitudine, longitudine)

            this.printDetailSunset(latitudine, longitudine)
            this.printDetailWeatherForecast(latitudine, longitudine)
  
        })

    }

    printDetailSunset(latitudine: number, longitudine: number) {
        this.meteoService.getSunsetDetail(latitudine, longitudine).subscribe((response: any) => {
            this.sunsetDetails = response
            console.log(this.sunsetDetails)
        })
    }

    printDetailWeatherForecast(latitudine: number, longitudine: number) {
        this.meteoService.getWeatherForecastDetail(latitudine, longitudine).subscribe((response: any) => {
            this.weatherForecastDetails = response
            console.log(this.weatherForecastDetails)
        })
    }

}