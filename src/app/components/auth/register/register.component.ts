import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(public userService: UsersService, private router: Router) {
    this.buildRegisterForm();
  }

  buildRegisterForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }

  register() {
    const { confirmPassword, ...userInfo } = this.registerForm.value;
    console.log(userInfo);
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      return alert('Senhas devem coincidir!!');
    }

    this.userService.insertUser(userInfo).subscribe((user: any) => {
      console.log('Usuário: ', user.name, `inserido com sucesso!`);
      this.router.navigate(['/auth/login']);
    });
  }
}
