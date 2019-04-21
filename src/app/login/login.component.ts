import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  	this.form = this.formBuilder.group({
  		username: ['', Validators.required],
  		password: ['', Validators.required]
  	});
  }

  get f() {
  	return this.form.controls;
  }

  onSubmit() {
  	this.submitted = true;

  	if(this.form.invalid) {
  		return;
  	}

  	let username = this.form.get('username').value;
  	let password = this.form.get('password').value;

  	let login = this.loginService.login(username, password);

  	if(login == "invalid") {
  		alert("Invalid credentials");
  	} else {
  		localStorage.setItem('user', username);
  		localStorage.setItem('isLogged', 'true');

  		alert('Login sucesssfull');
  		// this.router.navigateByUrl('home');
  		window.location.href = "/home";
  	}
  }

}
