import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('https://portafoliopersonal-f3203.firebaseio.com/data.json')
    .pipe(map( resp => resp));
  }
}
