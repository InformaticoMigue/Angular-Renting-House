import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../assets/types/user';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['../../styles.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  formBuilder: FormBuilder = inject(FormBuilder);
  router:Router = inject(Router);
  userService: UserService = inject(UserService);

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surnames: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  onSubmit() {
    const user:User = {
      name: this.loginForm.controls['name'].value,
      email: this.loginForm.controls['email'].value,
      surnames: this.loginForm.controls['surnames'].value
    }
    this.userService.setUser(user);
    this.router.navigate(['/']);

  }

}
