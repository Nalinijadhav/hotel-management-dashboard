import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: any[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
 
    this.http.get<any[]>('http://localhost:1337/rooms')
      .subscribe(
        response => {
         
          this.rooms = response;
        },
        error => {
          console.error('Error fetching hotel data:', error);
        }
      );
  }
}
