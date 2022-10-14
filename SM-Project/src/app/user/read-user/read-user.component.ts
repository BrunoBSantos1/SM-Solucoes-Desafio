import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
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
    private readUserService: ReadUserService,
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
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

  async deleteUser(id: number) {
    this.readUserService.delete(id).subscribe(() => {
      this.appService.showMessage('Usuario excluído com sucesso!')
    })
  }

  updateUser(id: number) {
    this.router.navigate(['/read/user/datails/', id], { relativeTo: this.route})
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
