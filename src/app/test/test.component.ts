import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService, UserData } from '../app.service';

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
  id!: number;

  userListData: UserData[] = [];

  selectedUser: string = '2';

  userFormGroup!: FormGroup;

  passwordRegex = '[^a-zA-Z0-9]';

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private formBuilder: FormBuilder
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
    this.buildForm();
    this.getDataFromService();
  }

  buildForm() {
    this.userFormGroup = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(this.passwordRegex),
        ],
      ],
    });
  }

  getDataFromService() {
    let data = this.appService.getData();

    this.email = data.email;
    this.age = data.age;
    this.name = data.name;
  }

  onSelectUser(e: any) {
    console.log(e);

    console.log(e.target.value);
  }

  onAddUser() {
    console.log(this.userFormGroup.value);

    console.log(this.userFormGroup.get('id')?.hasError('required'));

    if (this.userFormGroup.valid) {
      this.appService.addDataInUserList(this.userFormGroup.value);
      this.userFormGroup.reset();
    } else {
      console.log(this.userFormGroup);
    }
  }

  onFetchUserList() {
    console.log(this.appService.getUserList());

    this.userListData = this.appService.getUserList();
  }
}
