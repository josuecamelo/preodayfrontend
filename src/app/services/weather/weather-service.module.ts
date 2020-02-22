import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {WeatherService} from './service/weather.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class WeatherServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WeatherServiceModule,
      providers: [
        WeatherService,
      ]
    };
  }
}
