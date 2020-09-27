import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.pattern("^([a-zA-Z0-9])*[!@#$%^&*]{1}([a-zA-Z0-9])*$"), Validators.required]],
      cnfPass: ['', [Validators.pattern("^([a-zA-Z0-9])*[!@#$%^&*]{1}([a-zA-Z0-9])*$"), Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);

  }
}
