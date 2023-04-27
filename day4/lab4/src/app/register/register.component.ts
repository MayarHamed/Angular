import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)])
  })
  get AgeValid() {
    return this.validationForm.controls["age"].valid;
  }
  get AgeValue() {
    return this.validationForm.controls["age"].value;
  }
  get NameValid() {
    return this.validationForm.controls["name"].valid;
  }
  get NameValue() {
    return this.validationForm.controls["name"].value;
  }
  get EmailValid() {
    return this.validationForm.controls["email"].valid;
  }
  get EmailValue() {
    return this.validationForm.controls["email"].value;
  }

  add() {

    return  this.validationForm.valid;
   
  }
}
