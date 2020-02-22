import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../services/weather/service/weather.service';
import {Weather} from '../models/weather';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public weather: Weather;
  public cols: any[];
  public id: number;
  constructor(private router: Router, private activedRoute: ActivatedRoute, private weatherService: WeatherService) {
  }
  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'sol', header: 'Sun' },
      { field: 'av', header: 'Avg' },
      { field: 'min', header: 'Mín.' },
      { field: 'max', header: 'Máx.' },
    ];

    this.activedRoute.params.subscribe(params => {
      if (params.hasOwnProperty("id") ) {
        this.weatherService.getSunById(+params['id']).subscribe(data=> this.weather = data);
      }
    });
  }
}
