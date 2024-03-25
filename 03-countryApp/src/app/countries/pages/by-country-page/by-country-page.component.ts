import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface.ts';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit {
  constructor(private countriesServices: CountriesService) {}

  public countries: Country[] = [];
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountries.term;
  }

  searchByCountry(term: string) {
    this.countriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
