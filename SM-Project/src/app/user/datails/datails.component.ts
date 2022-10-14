import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataUser } from '../models/dataUser.model';
import { UserPage } from '../models/user.model';
import { ReadUserService } from '../user.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})
export class DatailsComponent implements OnInit {

  users: UserPage
  dataUser: DataUser

  updateUserForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    job: new FormControl('')
  });

  constructor(
    private readUserService: ReadUserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.datailsUser()
  }

  updateUser() {

  }

  datailsUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.readUserService.readonlyUser(id).subscribe((response) => {
      this.dataUser = response
      console.log(this.dataUser)
    });
  }

}
