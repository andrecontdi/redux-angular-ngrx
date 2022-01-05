import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryExitComponent } from './entry-exit.component';
import { DetailComponent } from './detail/detail.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    EntryExitComponent,
    DashboardComponent,
    DetailComponent,
    StatisticsComponent,
  ],
  imports: [CommonModule],
})
export class EntryExitModule {}
