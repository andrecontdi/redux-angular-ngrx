import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/shared/models/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {}

  public initAuthListener(): void {
    this.angularFireAuth.authState.subscribe((user) => console.log(user));
  }

  public signUp({ username, email, password }: User) {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const newUser = new User(user!.uid, username, email, password);
        return this.angularFirestore
          .doc(`${user!.uid}/user`)
          .set({ ...newUser });
      });
  }

  public login({ email, password }: User) {
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
