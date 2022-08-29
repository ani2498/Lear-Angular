import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { UserModal, UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit, OnDestroy {
  userFormGroup!: FormGroup;
  @Output() userCreateEvent: EventEmitter<UserModal> =
    new EventEmitter<UserModal>();
  @Output() userUpdateEvent: EventEmitter<UserModal> =
    new EventEmitter<UserModal>();
  @Input() editUserSubject: Subject<UserModal> = new Subject<UserModal>();
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.onEditUser();
  }

  buildForm() {
    this.userFormGroup = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      age: [null, [Validators.required]],
      city: new FormControl(null, [Validators.required]),
      index: new FormControl(),
    });
  }

  onEditUser() {
    // this.editUserSubject.subscribe((res: UserModal) => {
    //   console.log('create-edit', res);
    //   this.userFormGroup.patchValue(res);
    //   this.isEditMode = true;
    // });

    this.userService.userChangeEvent.subscribe((res: UserModal) => {
      this.userFormGroup.patchValue(res);
      this.isEditMode = true;
    });
  }

  onCreateUser() {
    if (!this.userFormGroup.valid) {
      alert('Form is invalid');
      return;
    }

    this.userCreateEvent.next(this.userFormGroup.value);
    this.userFormGroup.reset();
  }

  onUpdateUser() {
    console.log('on-update', this.userFormGroup.value);

    this.isEditMode = false;
    this.userUpdateEvent.next(this.userFormGroup.value);
    this.userFormGroup.reset();
  }

  ngOnDestroy(): void {
    this.userCreateEvent.unsubscribe();
    this.userUpdateEvent.unsubscribe();
    this.editUserSubject.unsubscribe();
  }
}
