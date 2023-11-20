import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	 providedIn: 'root',
})

export class MeteoService {

    constructor(private apiService: ApiService) {}

    getSunsetDetail(lat: number, long: number) {
        return this.apiService.searchSunset(lat, long)
    }

    getWeatherForecastDetail(lat: number, long: number) {
        return this.apiService.searchWeatherForecast(lat, long)
    }

}