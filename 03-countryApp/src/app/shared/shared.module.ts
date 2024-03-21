import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/AboutPage/AboutPage.component';
import { ContactComponent } from './pages/Contact/contact.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AboutPageComponent, SidebarComponent],
})
export class SharedModule {}
