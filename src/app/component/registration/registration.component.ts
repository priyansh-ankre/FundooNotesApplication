import { UserService } from './../../services/userservices/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationModel } from 'src/app/model/registration-model/registration-model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  form: FormGroup;
  message: any;
  constructor(private fb: FormBuilder, private service:UserService) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.pattern("^([a-zA-Z0-9])*[!@#$%^&*]{1}([a-zA-Z0-9])*$"), Validators.required]],
      cnfPass: ['', [Validators.pattern("^([a-zA-Z0-9])*[!@#$%^&*]{1}([a-zA-Z0-9])*$"), Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public register() {
      this.service.doRegistration(new RegistrationModel(
      this.form.get('firstName').value,
      this.form.get('lastName').value,
      this.form.get('Email').value,
      this.form.get('Password').value,
      this.form.get('cnfPass').value
    ))
    .subscribe((response)=>{

    },(error)=>{

    });
  }
}
