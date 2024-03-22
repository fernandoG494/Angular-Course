import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/HomePage/HomePage.component';
import { AboutPageComponent } from './shared/pages/AboutPage/AboutPage.component';
import { ContactComponent } from './shared/pages/Contact/contact.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then(
        (module) => module.CountriesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
