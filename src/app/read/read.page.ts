import { Component, OnInit } from '@angular/core';
import { Booking, HttpService } from '../http.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  // booking: any
  booking: Booking|undefined
  bookingId: string = ""
  constructor(private httpService: HttpService,private toastCtrl:ToastController, private router:Router,private alertController: AlertController) { }

  ngOnInit() {

  }

  // readPressed() {
  //   this.httpService.getById(parseInt(this.bookingId!!)).subscribe((resp: any) => {
  //     this.booking = resp["sheet1"];
  //   }, err => {

  //   })
  // }

  async readPressed(){
    const response = await this.httpService.getById(parseInt(this.bookingId)) as {sheet1:Booking}
    this.booking = response.sheet1
   }
  

  deleteItem(){
    this.httpService.delete(parseInt(this.bookingId!!)).subscribe((resp: any) => {
      console.log(resp)
      this.router.navigate(['/'])
      this.showToast()
    }, err => {

    })

  }

  async showToast(){
    const toast = await this.toastCtrl.create({
      message:"Booking deleted",
      duration: 5000,
      position: 'top', 
    })
    toast.present()
  }

  async presentConfirmDeleteAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this booking?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete operation cancelled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteItem();
            console.log('Item deleted');
          }
        }
      ]
    });
  
    await alert.present();
  }

}
