import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModal, UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  userList: UserModal[] = [];
  editUserEvent: Subject<UserModal> = new Subject<UserModal>();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onUserCreated(user: UserModal) {
    console.log(user);
    this.userList.push(user);
  }

  onUserUpdate(user: UserModal) {
    console.log('list-update', user);

    if (user.index !== undefined) {
      this.userList[user.index] = user;
    }
  }

  onEditUser(index: number) {
    this.userList[index].index = index;
    // this.editUserEvent.next(this.userList[index]);
    this.userService.passData(this.userList[index]);
  }

  ngOnDestroy(): void {
    this.editUserEvent.unsubscribe();
  }
}
