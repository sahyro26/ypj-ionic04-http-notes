import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface Booking {
  id: number;
  name: string;
  email: string;
  address:string;
  pickup: string;
  sent: string;
  motor: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = "https://api.sheety.co/4db58997dd33ab7eaa3d621c48bdea06/booking/sheet1"

  constructor(private httpClient: HttpClient) { }

  createBooking(data: any) {
    const sentData = {
      "sheet1": data
    }
    return this.httpClient.post(this.baseUrl, sentData)

  }

  getAll() {
    // return this.httpClient.get(this.baseUrl)
    return lastValueFrom(this.httpClient.get(this.baseUrl))
  }

  getById(id: number) {
    // return this.httpClient.get(`${this.baseUrl}/${id}`)
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}/${id}`))

  }

  updateBooking(id: number, data: any) {
    const sentData = {
      "sheet1": data
    }
    return this.httpClient.put(`${this.baseUrl}/${id}`, sentData)
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

}
