import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataUser } from '../models/dataUser.model';
import { UserPage } from '../models/user.model';
import { ReadUserService } from '../read-user.service';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  users: UserPage
  dataUser: DataUser[];

  page = '1';

  constructor(
    private readUserService: ReadUserService
  ) { }

  ngOnInit(): void {
    //this.readUserService.getAllUsers('2').subscribe(data => {this.users = data; console.log(this.user)})
    this.getUsers()
    
  }

  async getUsers() {
    this.readUserService.getAllUsers(`${this.page}`).subscribe((response) => {
      this.users = response;
      this.dataUser = this.users.data;
      console.log(this.dataUser)
    });
  }

  isFirstPage() {
    this.page = '1';
    this.getUsers()
    console.log(this.page)
  }

  isSecondPage() {
    this.page = '2';
    this.getUsers()
    console.log(this.page)
  }

  isThirdPage() {
    this.page = '3';
    this.getUsers()
    console.log(this.page)
  }

  isFourthPage() {
    this.page = '4';
    this.getUsers()
    console.log(this.page)
  }

}
