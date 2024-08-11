import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  booking = {
    "name": "",
    "email": "",
    "address": "",
    "pickup": "",
    "sent": "",
    "motor": ""
  }

  constructor(private httpService: HttpService, private toastCtrl:ToastController, private router:Router) { }

  ngOnInit() {
  }

  sendData() {
    this.httpService.createBooking(this.booking).subscribe(resp => {
      console.log(resp)
      this.router.navigate(['/'])
      this.showToast()

    }, err => {

    })
  }

  async showToast(){
    const toast = await this.toastCtrl.create({
      message:"Booking create",
      duration: 5000,
      position: 'top', 
    })
    toast.present()
  }

}
