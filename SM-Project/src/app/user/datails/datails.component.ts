import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DataUser } from '../models/dataUser.model';
import { UserPage } from '../models/user.model';
import { ReadUserService } from '../user.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})
export class DatailsComponent implements OnInit {

  responseDataUser: UserPage
  dataUser: DataUser

  updateUserForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    job: new FormControl('')
  });

  constructor(
    private readUserService: ReadUserService,
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {

    this.datailsUser()
  }

  updateUser() {

  }
  updateUserConect(data) {
    this.readUserService.updateUser(data).subscribe(() => {
      this.appService.showMessage('Usuario atualizado com sucesso!');

      this.router.navigate(['/read/user'])
    })
  }

  datailsUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.readUserService.readonlyUser(id).subscribe((response) => {
      this.dataUser = response.data
      console.log(this.dataUser.id)
    });
  }

}
