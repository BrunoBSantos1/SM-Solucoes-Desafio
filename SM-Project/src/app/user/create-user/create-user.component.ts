import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ReadUserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    job: new FormControl('')
  });

  constructor(
    private userService: ReadUserService,
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createUser() {
    let userRegister = this.createUserForm.value;
    this.registerConectService(userRegister);
  }

  registerConectService(data: any) {
    try {
      this.userService.createUser(data).subscribe(() => {
        this.appService.showMessage('Cadastro criado com sucesso!')

        this.router.navigate(['/read/user']);
      })
    } catch (error) { }

  }

}
