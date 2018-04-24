import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatGridListModule, MatInputModule, MatTabsModule, MatExpansionModule } from '@angular/material';
import { User } from '../user';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  signinform: FormGroup;
  signinUser = new User();


  constructor(private fb: FormBuilder, private router: Router, private user: UserService) { 
    this.signinform = fb.group({
      'username': [''],
      'password': ['']
    });
  }

  ngOnInit() {
  }

	loginUser(e) {
  		console.log(e);
  		const username = e.username;
  		const password = e.password;
    	this.user.loginUser(username, password)
    	  .subscribe(status => {
          	this.router.navigate(['home']);
      });
    }

    onSubmit(e){
    	console.log(e.username);
    	this.username = e.username;
    	this.password = e.password;
    }

  signupUser(val) {
  console.log("test");
  console.log(val.username);
  console.log(val.password);
    const signupuser = {
      username: val.username,
      password: val.password
    }
    this.user.create(signupuser)
      .subscribe(status => {
        this.router.navigate(['home']);
      });
  }

}
