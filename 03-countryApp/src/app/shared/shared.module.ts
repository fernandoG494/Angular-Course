import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/AboutPage/AboutPage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ContactComponent } from './pages/Contact/contact.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
