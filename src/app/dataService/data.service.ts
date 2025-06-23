import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://15.156.44.164:8080/idw-api/api/enquiry'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  submitOrder(order: Order): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

}