import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    
})
export class AppComponent implements OnInit {

    
    
    constructor(private weatherService: WeatherService) {

    }
    
    city = [
        { name: 'Aydın', description: ''},
        { name: 'Ordu', description: ''},
        { name: 'İzmir', description: ''},
        { name: 'Ankara', description: ''},
        { name: 'Konya', description: ''},
        { name: 'Sivas', description: ''},
        { name: 'İstanbul', description: ''},
        { name: 'Çanakkale', description: ''},
        { name: 'Bursa', description: ''},
        { name: 'Antalya', description: ''},

    ]

    //selected : string = "";
    


    cityName: string = 'Eskişehir';
    weatherData?: WeatherData;

    
    
    ngOnInit() {
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
    next: (response) => {
    this.weatherData= response;
    console.log(response);
    }
    }); 
    }           
    
    
    onSubmit() {
    this.ngOnInit()
    }

    public getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
        next: (response) => {
        this.weatherData = response;
        console.log(response);
        }
    });
    }

    public checkCith(data: any){
        this.cityName = data.target.value;
    }
}
