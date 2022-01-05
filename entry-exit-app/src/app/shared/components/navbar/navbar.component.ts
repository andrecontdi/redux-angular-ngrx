import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app/app.reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public username: string | undefined = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe(({ user }) => (this.username = user?.username));
  }
}
