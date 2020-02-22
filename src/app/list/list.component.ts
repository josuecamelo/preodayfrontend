import { Component, OnInit } from '@angular/core';
import {Weather} from '../models/weather';
import {Router} from '@angular/router';
import {WeatherService} from '../services/weather/service/weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public weathers: Weather[];
  public cols: any[];
  constructor(private router: Router, private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.getAll();

    this.cols = [
      { field: 'id', header: '#' },
      { field: 'sol', header: 'Sun' },
      { field: 'Avg', header: 'Avg' },
    ];
  }


  private getAll(): void {
    this.weatherService.getSuns().subscribe(data => {
      this.weathers = data;
      console.log(this.weathers);
    }, error => {
      console.log(error);
    });
  }
}
