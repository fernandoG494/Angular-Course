import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../interfaces/country.interface.ts';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  public cacheStore = {
    byCapital: { termn: '', countries: [] },
    byCountry: { termn: '', countries: [] },
    byRegion: { termn: '', countries: [] },
  };

  private apiUrl: string = 'https://restcountries.com/v3.1';

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries: any) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${query}`;
    return this.getCountriesRequest(url);
  }

  searchCountry(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${query}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(query: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${query}`;
    return this.getCountriesRequest(url);
  }
}
