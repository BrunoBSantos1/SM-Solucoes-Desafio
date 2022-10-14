import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes), RouterLink],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
