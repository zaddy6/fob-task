import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = localStorage.getItem('user');;
  constructor(private router: Router) { }

  ngOnInit() {
    let user = localStorage.getItem('user');
    
  	if(user == undefined || user == null) {
      alert('Please login to continue');
  		this.router.navigateByUrl('login');
  	}
  }

}
