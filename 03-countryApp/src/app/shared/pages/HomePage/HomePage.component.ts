import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'share-home-page',
  templateUrl: 'HomePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
