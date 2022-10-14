import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DatailsComponent } from './datails/datails.component';
import { ReadUserComponent } from './read-user/read-user.component';

const userRoutes: Routes = [
  {
    path: 'read/user',
    component: ReadUserComponent
  },
  {
    path: 'read/user/datails/:id',
    component: DatailsComponent
  },
  {
    path: 'create/user',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes), RouterLink],
  exports: [RouterModule]
})
export class UserRoutingModule { }