import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  efeturarLogin() {
    let userLogin = this.loginForm.value;
    this.loginConectService(userLogin);
  }

  loginConectService(data: any) {
    try {
      this.authService.efetuarLogin(data).subscribe((response) => {
        if (response.token) {
          let user = response.token
          localStorage.setItem('userLogado', user)
          this.appService.showMessage('Login efetuado com sucesso!')

          this.router.navigate(['read/user']);
        }
      })
    } catch (error) { }
  }

}
