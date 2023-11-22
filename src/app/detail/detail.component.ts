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

    latitudine: number = 0;
    longitudine: number = 0;

    flagConvertFormat: boolean = true;

    constructor (private meteoService: MeteoService, private route: ActivatedRoute) {}

    ngOnInit(): void {

        this.route.paramMap.subscribe(params => {

            this.latitudine = parseFloat(params.get("lat")!)
            this.longitudine = parseFloat(params.get("long")!)
            console.log(this.latitudine, this.longitudine)

            this.printDetailSunset(this.latitudine, this.longitudine)
            this.printDetailWeatherForecast(this.latitudine, this.longitudine)
  
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

    convertTo24HourFormat(time12h: string) {
        //Dividi l'orario e il periodo (AM/PM)
        const [time, period] = time12h.split(' '); 
        //Dividi le ore, i minuti e i secondi
        const [hours, minutes, seconds] = time.split(':').map(Number); 
        
        //Inizializza le ore nel formato a 24 ore
        let hours24 = hours; 
      
        if (period === 'PM' && hours24 !== 12) {
            //Se è PM e non è 12 PM, aggiungi 12 ore
            hours24 += 12; 
        } else if (period === 'AM' && hours24 === 12) {
            //Se è 12 AM (mezzanotte), le ore diventano 0
            hours24 = 0; 
        }
      
        // Formatta le ore, i minuti e i secondi in formato a 24 ore
        const formattedHours = hours24.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
      
        //return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; // Restituisce l'orario nel formato a 24 ore
        return "" + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds
      }

}