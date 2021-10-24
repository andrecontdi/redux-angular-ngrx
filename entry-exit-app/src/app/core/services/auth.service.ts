import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { AppState } from 'src/store/app/app.reducers';
import { setUser, unsetUser } from 'src/store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStateValueChangesSubscription: Subscription = new Subscription();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private store: Store<AppState>
  ) {
    this.authStateValueChangesSubscription = new Subscription();
  }

  public initAuthListener(): void {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.authStateValueChangesSubscription = this.angularFirestore
          .doc(`${user!.uid}/user`)
          .valueChanges()
          .subscribe((logedInUser) => {
            const user = User.fromFirebase(logedInUser);
            this.store.dispatch(setUser({ user }));
          });
      } else {
        if (this.authStateValueChangesSubscription) {
          this.authStateValueChangesSubscription.unsubscribe();
        }

        this.store.dispatch(unsetUser());
      }
    });
  }

  public signUp({ username, email, password }: any): Promise<void> {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const newUser = new User(user!.uid, username, email);
        return this.angularFirestore
          .doc(`${user!.uid}/user`)
          .set({ ...newUser });
      });
  }

  public login({ email, password }: any) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  public logout(): Promise<void> {
    return this.angularFireAuth.signOut();
  }

  public isAuthenticated(): Observable<boolean> {
    return this.angularFireAuth.authState.pipe(
      map((user: any) => user !== null)
    );
  }
}
