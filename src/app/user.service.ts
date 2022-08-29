import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  userChangeEvent: Subject<UserModal> = new Subject<UserModal>();
  constructor() {}

  passData(user: UserModal) {
    this.userChangeEvent.next(user);
  }
}

export interface UserModal {
  name: string;
  age: string;
  city: string;
  index?: number;
}
