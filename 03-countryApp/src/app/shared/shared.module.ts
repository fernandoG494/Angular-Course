import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { AboutPageComponent } from './pages/AboutPage/AboutPage.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent],
  imports: [CommonModule],
  exports: [HomePageComponent, AboutPageComponent],
})
export class SharedModule {}
