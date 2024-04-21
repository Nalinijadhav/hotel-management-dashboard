import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/auth/local`, credentials);
  }

  // Example of another API method
  getUser(userId: string) {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }

  // Add more methods for interacting with your backend API as needed
}
