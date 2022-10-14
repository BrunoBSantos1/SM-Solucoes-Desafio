import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataUser } from '../models/dataUser.model';
import { UserPage } from '../models/user.model';
import { ReadUserService } from '../user.service';

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
    this.getUsers()
  }

  async getUsers() {
    this.readUserService.getAllUsers(`${this.page}`).subscribe((response) => {
      this.users = response;
      this.dataUser = this.users.data;
    });
  }

  isFirstPage() {
    this.page = '1';
    this.getUsers()
  }

  isSecondPage() {
    this.page = '2';
    this.getUsers()
  }

  isThirdPage() {
    this.page = '3';
    this.getUsers()
  }

  isFourthPage() {
    this.page = '4';
    this.getUsers()
  }
}
