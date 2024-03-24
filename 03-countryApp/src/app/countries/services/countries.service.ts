import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://restcountries.com/v3.1';

  searchCapital(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  searchCountry(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  searchRegion(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${query}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
}
