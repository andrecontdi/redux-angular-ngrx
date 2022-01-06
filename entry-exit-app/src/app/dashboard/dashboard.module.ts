import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EntryExitComponent } from './entry-exit/entry-exit.component';
import { DetailComponent } from './detail/detail.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    EntryExitComponent,
    DetailComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
