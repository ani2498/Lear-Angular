import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  name!: string;
  email!: string;
  age!: number;

  userList: UserData[] = [];

  constructor() {}

  setData(data: DataResType) {
    this.name = data.name;
    this.email = data.email;
    this.age = data.age;
  }

  getData(): DataResType {
    return {
      name: this.name,
      age: this.age,
      email: this.email,
    };
  }

  addDataInUserList(obj: UserData) {
    this.userList.push(obj);
  }

  getUserList(): UserData[] {
    return this.userList;
  }
}

export interface DataResType {
  name: string;
  age: number;
  email: string;
}

export interface UserData {
  id: number;
  name: string;
}
