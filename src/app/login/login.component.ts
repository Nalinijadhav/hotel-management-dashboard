import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient,private router: Router) {}

  login() {
    const formData = {
      identifier: 'jadhavnalini1711@gmail.com', // Replace with actual email input value
      password: 'Nalini@123' // Replace with actual password input value
    };

    this.http.post<any>('http://localhost:1337/auth/local', formData)
      .subscribe(
        response => {
         
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          
          console.error('Login failed:', error);
        }
      );
  }
}

