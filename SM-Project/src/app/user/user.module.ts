import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadUserComponent } from './read-user/read-user.component';
import { UserRoutingModule } from './user.routing.module';
import { DatailsComponent } from './datails/datails.component';

@NgModule({
  declarations: [
    ReadUserComponent,
    DatailsComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    ReadUserComponent
  ]
})
export class UserModule { }
