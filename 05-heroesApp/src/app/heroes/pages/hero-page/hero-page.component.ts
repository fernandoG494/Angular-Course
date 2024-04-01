import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit {
  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public hero?: Hero;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes/list']);

        this.hero = hero;
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
