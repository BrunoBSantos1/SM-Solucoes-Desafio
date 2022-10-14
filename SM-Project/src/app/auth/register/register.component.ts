import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  efetuarRegister() {
    let userRegister = this.registerForm.value;
    this.registerConectService(userRegister);
  }

  registerConectService(data: any) {
    try {
      this.authService.createRegister(data).subscribe((response) => {
        this.appService.showMessage('Cadastro criado com sucesso!')

        this.router.navigate(['/login']);
      })
    } catch (error) { }

  }



}
