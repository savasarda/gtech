import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';

  public welcomeString = '';
  public loginController = false;

  constructor() { }

  ngOnInit(): void {
  }

  loginControl(){
    if(this.username === 'admin' && this.password === 'admin'){
      this.loginController = true;
      this.welcomeString = 'Welcome'; 
    }else{
      this.loginController = false;
      this.welcomeString = 'Username or Password is wrong! Please try again!';
    }
  }
}