import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: [],
})
export class SonComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() counterChanges = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public multiply() {
    this.counter = this.counter * 2;
    this.counterChanges.emit(this.counter);
  }

  public divide() {
    this.counter = this.counter / 2;
    this.counterChanges.emit(this.counter);
  }
}
