import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [AppComponent, TestComponent, TestModalComponent, UserListComponent, UserCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
