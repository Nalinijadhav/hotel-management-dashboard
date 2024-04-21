import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';

@NgModule({
  declarations: [HotelListComponent],
  imports: [CommonModule],
  exports: [HotelListComponent] // If needed
})
export class HotelListModule { }
