import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { UserEntity } from '../../types/user-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  users!: UserEntity[];
  user!: { email: string; password: string } | UserEntity;

  constructor(public userService: UsersService) {
    this.buildLoginForm();
    this.userService.getUsers().subscribe((users: UserEntity[]) => {
      this.users = users;
    });
  }

  buildLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    const authenticatedUser: UserEntity | undefined = this.users?.find(
      (u: UserEntity) =>
        u.email === this.user.email && this.user.password === u.password
    );

    if (authenticatedUser) {
      console.log('Usuário autenticado!', authenticatedUser);
      this.user = authenticatedUser;
      localStorage.setItem('User', JSON.stringify(this.user));
    } else {
      alert('Email ou senha incorreta');
    }
  }
}
