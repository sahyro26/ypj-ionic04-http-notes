import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  bookingId: string = ""
  booking 
  : any
  // = {
  //   "name": "",
  //   "email": "",
  //   "address": "",
  //   "pickup": "",
  //   "sent": "",
  //   "motor": ""
  // }
  constructor(private httpService: HttpService,private toastCtrl:ToastController, private router:Router) { }

  ngOnInit() {
  }

  // readPressed() {
  //   this.httpService.getById(parseInt(this.bookingId!!)).subscribe((resp: any) => {
  //     this.booking = resp["sheet1"];
  //   }, err => {

  //   })
  // }

  updateBooking() {
    this.httpService.updateBooking(parseInt(this.bookingId),this.booking).subscribe(resp => {
      console.log(resp)
      this.router.navigate(['/'])
      this.showToast()

    }, err => {

    })
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: "Booking updated",
      duration: 5000,
      position: 'top',
    })
    toast.present()
  }

}
