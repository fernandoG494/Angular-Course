import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  constructor(private countriesServices: CountriesService) {}

  public countries: Country[] = [];

  searchByCapital(term: string) {
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
