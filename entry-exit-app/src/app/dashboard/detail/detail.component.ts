import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntryExitService } from 'src/app/core/services/entry-exit.service';
import { EntryExit } from 'src/app/shared/models/entry-exit.model';
import { AppState } from 'src/store/app/app.reducers';
import { AppStateWithEntryExit } from 'src/store/entry-exit/entry-exit.reducers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  public items: EntryExit[] | null = null;

  constructor(
    private store: Store<AppStateWithEntryExit>,
    private entryExitService: EntryExitService
  ) {}

  ngOnInit(): void {
    this.store.select('entryExit').subscribe(({ items }) => {
      this.items = items;
    });
  }

  public deleteItem(item: EntryExit): void {
    this.entryExitService
      .deleteEntry(item.uid)
      .then(() => Swal.fire('Borrado'))
      .catch((error) => Swal.fire('Ocurrio un error'));
  }
}
