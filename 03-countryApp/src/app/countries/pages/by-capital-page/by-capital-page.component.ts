import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface.ts';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private countriesServices: CountriesService) {}

  public countries: Country[] = [];
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
