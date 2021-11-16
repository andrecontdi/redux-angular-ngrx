import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntryExit } from 'src/app/shared/models/entry-exit.model';
import { AppState } from 'src/store/app/app.reducers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  public items: EntryExit[] | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('entryExit').subscribe(({ items }) => {
      this.items = items;
    });
  }

  // public deleteItem(uid: string): void {}
}
