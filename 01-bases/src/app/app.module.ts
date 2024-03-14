import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DbzModule } from './dbz/dbz.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    CounterModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
