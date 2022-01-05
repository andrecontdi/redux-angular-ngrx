import { Routes } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
import { EntryExitComponent } from '../entry-exit.component';
import { StatisticsComponent } from '../statistics/statistics.component';

export const dashboardRoutes: Routes = [
  { path: '', component: StatisticsComponent },
  { path: 'entry-exit', component: EntryExitComponent },
  { path: 'detail', component: DetailComponent },
];
