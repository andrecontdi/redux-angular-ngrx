import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class EntryExit {
  constructor(
    public description: StringMap,
    public amount: number,
    public type: string,
    public uid?: string
  ) {}

  static fromFirebase({ description, amount, type }: any) {
    return new EntryExit(description, amount, type);
  }
}
