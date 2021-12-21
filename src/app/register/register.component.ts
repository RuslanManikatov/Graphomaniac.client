import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email:    new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  register(){
    this.authService.register(this.registerForm.value).subscribe(data =>{
      console.log(data);
    });
  }
  
  get username(){
    return this.registerForm.get('username');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
}
