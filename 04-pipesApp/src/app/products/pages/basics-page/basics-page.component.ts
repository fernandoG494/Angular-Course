import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower = 'fernando';
  public nameUpper = 'FERNANDO';
  public fullName = 'fErNaNdO';

  public customDate: Date = new Date();
}
