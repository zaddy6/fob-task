import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  mock_username: string;
  mock_password: string;

  constructor() {
  	this.mock_username = 'test';
  	this.mock_password = 'test';
  }

  login(username, password) {
  	if(username == username && this.mock_password == password) {
  		return username;
  	} else {
  		return "invalid";
  	}
  }
}
