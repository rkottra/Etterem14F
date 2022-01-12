import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private http: HttpClient) { 

  }

  getEtelek():Observable<string[]> {
    return this.http.get<string[]>("/assets/adat.json");
  }
}
