import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { filter, switchMap, tap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroesService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  public heroForm = new FormGroup({
    alt_img: new FormControl(''),
    alter_ego: new FormControl(''),
    characters: new FormControl(''),
    first_appearance: new FormControl(''),
    id: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    superhero: new FormControl<string>('', { nonNullable: true }),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
        return;
      });
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`${hero.superhero} updated!`);
      });

      return;
    }

    this.heroService.addHero(this.currentHero).subscribe((hero) => {
      this.showSnackbar(`${hero.superhero} created!`);
      this.router.navigate(['/heroes/edit', hero.id]);
    });
  }

  onDeleteHero(): void {
    if (!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result === true),
        switchMap(() => this.heroService.deleteHero(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted)
      )
      .subscribe((result) => {
        this.router.navigate(['/heroes']);
      });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Done', { duration: 2500 });
  }
}
