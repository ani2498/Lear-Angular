import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgaeNotFoundComponent } from './pgae-not-found/pgae-not-found.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  },
  {
    path: 'test/:age/:name',
    component: TestComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'test-two',
    component: TestTwoComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: '**',
    component: PgaeNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
