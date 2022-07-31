import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName : string) : Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers : new HttpHeaders()
      .set(environment.CollectAPIHostHeaderName,environment.CollectApIHostHeaderValue)
      .set(environment.CollectAPIKeyHeaderName,environment.CollectAPIKeyHeaderValue),
      params : new HttpParams()
      .set('data.city', cityName)
      .set('data.lang', 'tr')
      
    })

  }
}
