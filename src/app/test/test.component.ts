import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // providers: [AppService]
})
export class TestComponent implements OnInit {
  age: number = 0;
  inputClass: string = '';
  disableButtonOne: boolean = false;
  isEligibleForVoting: boolean = false;
  message: string = '';
  name!: string;
  email!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {
    activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res);
        this.age = +res.age;
        this.name = res.name;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });

    activatedRoute.queryParams.subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService() {
    let data = this.appService.getData();

    this.email = data.email;
    this.age = data.age;
    this.name = data.name;
  }
}
