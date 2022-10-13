import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
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

  registerConectService(data:any) {
    try {
      this.authService.createRegister(data).subscribe((response) => {
        console.log(response);
  
        this.router.navigate(['/login']);
      })
    } catch (error) {
      console.log('erro', error)
    }
    
  }
  


}
