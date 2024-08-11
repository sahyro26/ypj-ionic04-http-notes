import { Component, OnInit } from '@angular/core';
import { Booking, HttpService } from '../http.service';

@Component({
  selector: 'app-readall',
  templateUrl: './readall.page.html',
  styleUrls: ['./readall.page.scss'],
})
export class ReadallPage implements OnInit {
  // bookings = []
  bookings: Booking[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.getAll().subscribe((resp: any) => {
    //   this.bookings = resp["sheet1"];

    // }, err => {

    // })
    this.loadData()
  }

  async loadData() {
    const response = await this.httpService.getAll() as { sheet1: Booking[] }
    this.bookings = response.sheet1
  }

}
