import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guests: any[] = []; // Array to store hotel data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch hotel data from the backend API
    this.http.get<any[]>('http://localhost:1337/guests')
      .subscribe(
        response => {
          // Store the retrieved hotel data in the hotels array
          this.guests = response;
        },
        error => {
          console.error('Error fetching hotel data:', error);
        }
      );
  }
}
