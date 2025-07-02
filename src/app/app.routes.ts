import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { TrackComponent } from './track/track.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'track', pathMatch: 'full', component: TrackComponent },
  { path: 'summary', pathMatch: 'full', component: SummaryComponent },
];
