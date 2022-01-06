import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { entryExitReducer } from 'src/store/entry-exit/entry-exit.reducers';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { EntryExitComponent } from './entry-exit/entry-exit.component';
import { StatisticsComponent } from './statistics/statistics.component';

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
    StoreModule.forFeature('entryExit', entryExitReducer),
  ],
})
export class DashboardModule {}
