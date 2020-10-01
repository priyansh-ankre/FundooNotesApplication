import { UserService } from './../../services/userservices/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/model/login-model/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.pattern("^([a-zA-Z0-9])*[!@#$%^&*]{1}([a-zA-Z0-9])*$"), Validators.required]],
      cartId: ""
    })
  }

  ngOnInit(): void {
  }

  public login() {
    this.service.doLogin(new LoginModel(
      this.form.get('cartId').value,
      this.form.get('email').value,
      this.form.get('password').value
    ))
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);

      });
  }
}
