import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  public country?: Country;

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        console.log(country);
        return (this.country = country);
      });
  }
}
