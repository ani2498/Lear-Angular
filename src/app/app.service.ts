import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  name!: string;
  email!: string;
  age!: number;

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
}

export interface DataResType {
  name: string;
  age: number;
  email: string;
}
