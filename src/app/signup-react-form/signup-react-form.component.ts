import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from '../common/Validator/username.validators';

@Component({
  selector: 'signup-react-form',
  templateUrl: './signup-react-form.component.html',
  styleUrls: ['./signup-react-form.component.css']
})
export class SignupReactFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[
        Validators.required,
        // Validators.minLength(3),
        // UsernameValidators.cannotContainSpace,
      ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required)
    })
  });

  login() {
  //  let isValid = authService.login(this.form.value);
      this.form.setErrors({
        invalidLogin: true
      });
    }


  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }
}
