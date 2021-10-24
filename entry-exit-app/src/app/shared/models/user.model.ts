export class User {
  constructor(
    public uid: string,
    public username: string,
    public email: string
  ) {}

  static fromFirebase({ uid, username, email }: any) {
    return new User(uid, username, email);
  }
}
