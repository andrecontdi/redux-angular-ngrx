import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: [],
})
export class GrandsonComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() counterChanges = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public reset(): void {
    this.counter = 0;
    this.counterChanges.emit(this.counter);
  }
}
