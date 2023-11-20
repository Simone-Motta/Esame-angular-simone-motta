import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SunsetResults } from '../model/sunset.model';
import { map } from 'rxjs';
import { WeatherForecastResult } from '../model/forecast.model';

@Injectable({
	 providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    /**
     * API RICERCA DATI ALBA & TRAMONTO
     * 
     * @param lat, @param long 
     * @returns richiesta Api 
     */
    searchSunset(lat: number, long: number) {
        return this.http.get('https://api.sunrisesunset.io/json?lat=' + lat + '&lng=' + long).pipe(map((response: any) => {
            return response.results as SunsetResults
        }))
    }

    /**
     * API RICERCA DATI METEO
     * 
     * @param lat, @param long  
     * @returns richiesta Api 
     */
    searchWeatherForecast(lat: number, long: number) {
        return this.http.get('https://www.7timer.info/bin/astro.php?lon=' + long + '&lat=' + lat + '&ac=0&unit=metric&output=json&tzshift=0').pipe(map((response: any) => {
            return response.dataseries as WeatherForecastResult[] 
        }))
    }

}