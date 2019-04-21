import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	localStorage.removeItem('user');
  	localStorage.setItem('isLogged', 'false');

  	// this.router.navigateByUrl('login');
  	window.location.href = "/login";
  }

}
