import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInterface } from '../interface/login/login-interface';
import { HttpserviceService } from '../services/httpServices/httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpserviceService) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.pattern("^([a-zA-Z0-9])*[!@#$%^&*]{1}([a-zA-Z0-9])*$"), Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  public login() {
     let response= this.service.doLogin(new LoginInterface(
      this.form.get('email').value,
      this.form.get('password').value
    ));
      response.subscribe();
  }
}
