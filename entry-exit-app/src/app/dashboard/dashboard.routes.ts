import { Routes } from '@angular/router';
import { DetailComponent } from '../entry-exit/detail/detail.component';
import { EntryExitComponent } from '../entry-exit/entry-exit.component';
import { StatisticsComponent } from '../entry-exit/statistics/statistics.component';

export const dashboardRoutes: Routes = [
  { path: '', component: StatisticsComponent },
  { path: 'entry-exit', component: EntryExitComponent },
  { path: 'detail', component: DetailComponent },
];
