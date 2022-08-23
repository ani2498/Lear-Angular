import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { TestTwoComponent } from './test-two/test-two.component';

@Component({
  selector: 'app-root',
  // template: `<p>Hi</p> <input type="button" (click)="navigateToTestOne()"/>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  age = 12;
  constructor(private router: Router, private appService: AppService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOninit');
  }

  navigateToTest() {
    // this.router.navigateByUrl('/test/' + 12, qur);
    // this.router.navigate(['test'], {
    //   queryParams: {
    //     age: 12,
    //     name: 'TEST',
    //     email: 'test@email,in',
    //   },
    // });
    this.appService.setData({
      name: 'ANiket',
      age: 10,
      email: 'aniket@email.in',
    });
    this.router.navigateByUrl('/test');
  }
}
