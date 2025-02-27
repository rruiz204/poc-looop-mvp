import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { TestPageComponent } from './modules/test/test-page/test-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'test', component: TestPageComponent },
];
