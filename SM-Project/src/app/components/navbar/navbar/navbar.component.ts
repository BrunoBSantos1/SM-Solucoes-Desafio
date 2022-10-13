import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  isLogged(): Boolean {
    return localStorage.getItem('userLogado')? true : false
  }

  logout() {
    localStorage.clear();

    this.router.navigate(['/login'])
  }

}
