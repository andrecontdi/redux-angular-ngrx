import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntryExit } from 'src/app/shared/models/entry-exit.model';
import { AppState } from 'src/store/app/app.reducers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EntryExitService {
  private entryExitValueChangesSubscription: Subscription = new Subscription();

  constructor(
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  public addItem(entryExit: EntryExit) {
    return this.angularFirestore
      .doc(`${this.authService.user.uid}/entry-exit`)
      .collection('items')
      .add({ ...entryExit });
  }

  public entryExitListener(): Observable<EntryExit[]> {
    return this.angularFirestore
      .collection(`${this.authService.user.uid}/entry-exit/items`)
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((snap) => ({
            ...(snap.payload.doc.data() as any),
            uid: snap.payload.doc.id,
          }));
        })
      );
  }
}
