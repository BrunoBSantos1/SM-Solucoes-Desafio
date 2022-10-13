import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadUserComponent } from './read-user/read-user.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  declarations: [
    ReadUserComponent,
    
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
