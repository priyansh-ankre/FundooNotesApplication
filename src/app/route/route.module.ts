import { RegistrationComponent } from './../component/registration/registration.component';
import { LoginComponent } from './../component/login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




const routes : Routes=[
  {path : 'login',component:LoginComponent},
  {path : 'registration',component:RegistrationComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RouteModule { }

export const appRoutingModule = RouterModule.forRoot(routes);
