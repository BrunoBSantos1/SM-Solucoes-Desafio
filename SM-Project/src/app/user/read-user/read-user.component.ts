import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserPage } from '../models/user.model';
import { ReadUserService } from '../read-user.service';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  users: UserPage[]

  teste:  {
    "page":2,
    "per_page":6,
    "total":12,
    "total_pages":2,
    "data":[
       {
          "id":7,
          "email":"michael.lawson@reqres.in",
          "first_name":"Michael",
          "last_name":"Lawson",
          "avatar":"https://reqres.in/img/faces/7-image.jpg"
       },
       {
          "id":8,
          "email":"lindsay.ferguson@reqres.in",
          "first_name":"Lindsay",
          "last_name":"Ferguson",
          "avatar":"https://reqres.in/img/faces/8-image.jpg"
       },
       {
          "id":9,
          "email":"tobias.funke@reqres.in",
          "first_name":"Tobias",
          "last_name":"Funke",
          "avatar":"https://reqres.in/img/faces/9-image.jpg"
       },
       {
          "id":10,
          "email":"byron.fields@reqres.in",
          "first_name":"Byron",
          "last_name":"Fields",
          "avatar":"https://reqres.in/img/faces/10-image.jpg"
       },
       {
          "id":11,
          "email":"george.edwards@reqres.in",
          "first_name":"George",
          "last_name":"Edwards",
          "avatar":"https://reqres.in/img/faces/11-image.jpg"
       },
       {
          "id":12,
          "email":"rachel.howell@reqres.in",
          "first_name":"Rachel",
          "last_name":"Howell",
          "avatar":"https://reqres.in/img/faces/12-image.jpg"
       }
    ],
    "support":{
       "url":"https://reqres.in/#support-heading",
       "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
    }
 }

  constructor(
    private readUserService: ReadUserService
  ) { }

  ngOnInit(): void {
    //this.readUserService.getAllUsers('2').subscribe(data => {this.users = data; console.log(this.user)})
    this.getUsers()
    console.log(this.teste?.data[0])
  }

  async getUsers() {
    await this.readUserService.getAllUsers('2').subscribe((response) => {
      this.users = response
      console.log('users: ',this.users);
    });
  }

}
