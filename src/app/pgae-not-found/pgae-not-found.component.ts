import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgae-not-found',
  templateUrl: './pgae-not-found.component.html',
  styleUrls: ['./pgae-not-found.component.css'],
})
export class PgaeNotFoundComponent implements OnInit {
  bookUrl =
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80';
  constructor() {}

  ngOnInit(): void {}

  onConfirm() {
    let res = confirm('Are you sure ');

    if (res) {
      console.log('yes');
    } else {
      console.log('No');
    }
  }
}
