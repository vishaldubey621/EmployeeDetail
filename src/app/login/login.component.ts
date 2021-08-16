import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }

    public loginForm: FormGroup = new FormGroup({
     username: new  FormControl('', [Validators.required]),
     password: new FormControl('', [Validators.required])
   });

  ngOnInit(): void {
  }

  public onSubmit()
  {
    console.log(this.loginForm.value);

    if(this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin') {
      this.router.navigate(['employee'])
    } else {
      alert("Invalid Username or Password")
    }
    
  }

}
