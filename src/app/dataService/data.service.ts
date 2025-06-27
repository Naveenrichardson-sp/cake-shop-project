import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order'; // Adjust path if needed
import { BakingEnquiry, BakingEnquiryResponse } from '../model/bakingEnquiry';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://15.156.44.164:8080/idw-api/api/'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  submitOrder(order: Order): Observable<any> {
    return this.http.post(this.apiUrl + 'enquiry', order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + 'enquiry');
  }

  bakingEnquiry(enquiry: BakingEnquiry): Observable<BakingEnquiryResponse> {
    return this.http.post<BakingEnquiryResponse>(`${this.apiUrl}application-form`, enquiry);
  }

}