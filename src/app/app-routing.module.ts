import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
