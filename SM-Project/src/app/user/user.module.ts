import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadUserComponent } from './read-user/read-user.component';
import { UserRoutingModule } from './user.routing.module';
import { DatailsComponent } from './datails/datails.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    ReadUserComponent,
    DatailsComponent,
    CreateUserComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ReadUserComponent
  ]
})
export class UserModule { }
