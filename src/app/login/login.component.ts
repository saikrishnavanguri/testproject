import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  erorMsg: any;
  successMsg: any;
  constructor(public formbuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      pswd: ['', Validators.required]
    })
  }


  submit() {
    if (this.loginForm.value.username == 'Chintu' && this.loginForm.value.pswd == 'sai') {
      this.router.navigate(['/dashboard'])
      this.successMsg = "Login Successfully";
      setTimeout(() => {
        this.successMsg = ''
      }, 2000);
    } else {
      this.erorMsg = "Please Enter All Fields"
      setTimeout(() => {
        this.erorMsg = ''
      }, 2000);
    }

  }

}
