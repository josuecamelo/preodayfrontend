import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Weather} from '../../../models/weather';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  public getSuns(): Observable<any> {
    return this.http.get(`${environment.urlApi}/weather`);
  }

  public getSunById(id: any): Observable<any> {
    return this.http.get(`${environment.urlApi}/weather/${id}`);
  }
}
