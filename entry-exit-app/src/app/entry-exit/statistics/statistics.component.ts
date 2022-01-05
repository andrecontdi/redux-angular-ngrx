import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntryExit } from 'src/app/shared/models/entry-exit.model';
import { AppState } from 'src/store/app/app.reducers';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent implements OnInit {
  public entrys = 0;
  public exits = 0;
  public totalEntrys = 0;
  public totalExits = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('entryExit').subscribe(({ items }) => {
      this.generateStats(items);
    });
  }

  private generateStats(items?: EntryExit[] | null): void {
    items?.map((item) => {
      if (item.type === 'entry') {
        this.totalEntrys += item.amount;
        this.entrys++;
      } else {
        this.totalExits += item.amount;
        this.exits++;
      }
    });
  }
}
