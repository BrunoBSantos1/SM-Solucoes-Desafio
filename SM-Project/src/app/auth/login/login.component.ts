import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
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

  loginConectService(data:any) {
    try {
      this.authService.efetuarLogin(data).subscribe((response) => {
        if(response.token) {
          let user = response.token
          console.log(user)
          localStorage.setItem('userLogado', user)

          this.router.navigate(['read/user']);
        }else{
          
        }
      })
    } catch (error) {}
  }

}
