import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location>('https://ipapi.co/92.244.24.162/json/')
    // return this.http.get<Location>('https://ipapi.com/api/check?access_key=AIzaSyBfBDsLeyUU9ZYLzE-zqprOgF2CfPjcLdo')
  }
}
