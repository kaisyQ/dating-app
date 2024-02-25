import { Routes } from '@angular/router';
import {ContentMainComponent} from "../pages/content.main/content.main.component";
import {HomeComponent} from "../pages/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ContentMainComponent}
];
